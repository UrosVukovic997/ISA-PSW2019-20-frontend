import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours, parseISO
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {KalendarService} from '../../service/kalendar/kalendar.service';
import {KalendarDogadjaj} from '../../shared/utilities/kalendar-dogadjaj';
import {Router} from '@angular/router';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-kalendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent  implements  OnInit {
  calendarPlugins = [dayGridPlugin];
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
   /* {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
*/  ];

  activeDayIsOpen = true;
  dogadjaji: any = [];
  color;
  naslov;
  constructor(private modal: NgbModal, private kalendarService: KalendarService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUserRole') === 'lekar') {
      this.getDataLekar();
    }
    if (localStorage.getItem('currentUserRole') === 'sestra') {
    }
    // this.dsads();


  }
  dsads() {
    this.kalendarService.getAll().subscribe((data: KalendarDogadjaj) => {
      this.dogadjaji = data;
      for (const dogadjaj of this.dogadjaji) {
        console.log(this.events);
        this.events.push(   {
          start: new Date(dogadjaj.datum),
          title: dogadjaj.naslov,
          color: colors.yellow,
          actions: this.actions
        });
        console.log(this.events);
      }
    });
  }

  getDataLekar() {
    this.kalendarService.getLekar(localStorage.getItem('currentUserUsername')).subscribe(data => {
      this.dogadjaji = data;
      this.fillLekar();
    });
  }

  fillLekar() {

    for (const dogadjaj of this.dogadjaji) {

      if (dogadjaj.naslov === 'Odsustvo-odmor') {
        this.color = colors.blue;
        this.naslov = dogadjaj.naslov;
      } else if (dogadjaj.naslov === 'Pregled') {
        this.color = colors.yellow;
        this.naslov = dogadjaj.naslov + ' Pacijent JBO: ' + dogadjaj.jbo;
      } else {
        this.color = colors.red;
        this.naslov = dogadjaj.naslov + ' Pacijent JBO: ' + dogadjaj.jbo;
      }
      this.events.push(    {
        start: new Date(dogadjaj.start),
        end: new Date(dogadjaj.end),
        title: this.naslov,
        color: this.color,
        actions: this.actions,
        allDay: true,
        resizable: {
          beforeStart: false,
          afterEnd: false
        },
        draggable: false
      });
    }
  }


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    if (localStorage.getItem('currentUserRole').toString() === 'lekar') {
      this.router.navigate(['lekar-kc/zapocniPregled']);
    }
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }



}

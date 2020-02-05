import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {KalendarComponent} from './kalendar/kalendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import {FormsModule} from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [KalendarComponent],
  exports: [KalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FullCalendarModule

  ]
})
export class KalendarModule { }

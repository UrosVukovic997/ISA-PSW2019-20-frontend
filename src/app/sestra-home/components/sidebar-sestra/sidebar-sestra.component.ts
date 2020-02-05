import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/sestra/pacijenti', title: 'Pacijenti',  icon: 'users_circle-08', class: '' },
  { path: '/sestra/kalendar', title: 'Radni kalendar',  icon: 'ui-1_calendar-60', class: '' },
  { path: '/sestra/odmor', title: 'Zahtev za odmor',  icon: 'transportation_bus-front-12', class: '' },
  { path: '/sestra/recepti', title: 'Recepti',  icon: 'education_paper', class: '' },
  { path: '/sestra/kartoni', title: 'Kartoni',  icon: 'education_paper', class: '' },

];
@Component({
  selector: 'app-sidebar-sestra',
  templateUrl: './sidebar-sestra.component.html',
  styleUrls: ['./sidebar-sestra.component.css']
})
export class SidebarSestraComponent implements OnInit {

  menuItems: any[];


  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ( window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}

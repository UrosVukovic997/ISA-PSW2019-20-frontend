import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/lekar-kc/listapacijenata', title: 'Lista pacijenata',  icon: ' design_bullet-list-67', class: '' },
  { path: '/lekar-kc/zapocniPregled', title: 'Zapocni pregled',  icon: 'ui-1_simple-add', class: '' },
  { path: '/lekar-kc/zakazivanjePregleda', title: 'Zakazi pregled / operaciju',  icon: 'ui-1_send', class: '' },
  { path: '/lekar-kc/radnikalendar', title: 'Radni kalendar',  icon: 'ui-1_calendar-60', class: '' },
  { path: '/lekar-kc/licniprofil', title: 'Licni profil',  icon: 'users_single-02', class: '' },
  { path: '/lekar-kc/odsustvoodmori', title: 'Odsustva i odmori',  icon: 'media-1_album', class: '' },
  { path: '/lekar-kc/kartoni', title: 'Kartoni',  icon: 'shopping_credit-card', class: '' },
];

@Component({
  selector: 'app-sidebar-lekar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarLekarComponent implements OnInit {

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

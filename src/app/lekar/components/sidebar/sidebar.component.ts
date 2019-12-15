import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/lekar-kc/listapacijenata', title: 'Lista pacijenata',  icon: 'ui-1_simple-add', class: '' },
  { path: '/lekar-kc/odsustvoodmori', title: 'Odsustva i odmori',  icon: 'media-2_sound-wave', class: '' },
  { path: '/lekar-kc/licniprofil', title: 'Licni profil',  icon: 'ui-1_simple-add', class: '' },
  { path: '/lekar-kc/radnikalendar', title: 'Radni kalendar',  icon: 'media-2_sound-wave', class: '' },
  { path: '/lekar-kc/zakazivanjePregledaOperacija', title: 'Zakazivanje odsustva/odmora',  icon: 'ui-1_simple-add', class: '' }
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

import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin-kc/registrujkliniku', title: 'Registruj kliniku',  icon: 'design_app', class: '' },
  { path: '/admin-kc/registrujadministratora', title: 'Registruj administratora',  icon: 'design_app', class: '' },
  { path: '/admin-kc/zahtevizaregistraciju', title: 'Zahtevi za registraciju',  icon: 'design_app', class: '' },
  { path: '/admin-kc/sifarniklekova', title: 'Lekova',  icon: 'design_app', class: '' },
  { path: '/admin-kc/sifrnikllinika', title: 'Klinika',  icon: 'design_app', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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

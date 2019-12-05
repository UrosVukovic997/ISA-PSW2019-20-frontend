import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin-kc/registrujkliniku', title: 'Registruj kliniku',  icon: 'health_ambulance', class: '' },
  { path: '/admin-kc/registrujadministratora', title: 'Registruj administratora',  icon: 'ui-1_simple-add', class: '' },
  { path: '/admin-kc/zahtevizaregistraciju', title: 'Zahtevi za registraciju',  icon: 'files_single-copy-04', class: '' },
  { path: '/admin-kc/sifarniklekova', title: 'Šifarnik lekova',  icon: 'ui-2_favourite-28', class: '' },
  { path: '/admin-kc/sifarnikdijagnoza', title: 'Šifarnik dijagnoza',  icon: 'media-2_sound-wave', class: '' }
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

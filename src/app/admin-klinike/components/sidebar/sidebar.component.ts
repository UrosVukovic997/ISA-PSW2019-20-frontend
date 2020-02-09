import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/admin-klinike/profilKlinike', title: 'Profil klinike',  icon: 'health_ambulance', class: '' },
  { path: '/admin-klinike/definisiSlobodneTer', title: 'Definisi slob. term.',  icon: 'ui-1_simple-add', class: '' },
  { path: '/admin-klinike/poslovanje', title: 'Poslovanje',  icon: 'files_single-copy-04', class: '' },
  { path: '/admin-klinike/pretrazuj', title: 'Pretrazuj',  icon: 'ui-2_favourite-28', class: '' },
  { path: '/admin-klinike/pretragaSala', title: 'Pretraga sala',  icon: 'ui-1_zoom-bold', class: '' },
  { path: '/admin-klinike/odsustvoOdmori', title: 'Odsustva i odmori',  icon: 'transportation_bus-front-12', class: '' }
 ];

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarAdminKlinikeComponent implements OnInit {

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

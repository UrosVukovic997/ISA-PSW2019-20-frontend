import { Component, OnInit } from '@angular/core';
import {LogovanjeServiceService} from '../../../service/logovanjeService/logovanje-service.service';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/profilPacijenta/profil', title: 'Profil pacijenta',  icon: '', class: '' },
  { path: '/profilPacijenta/klinike', title: 'Klinike pacijenta',  icon: '', class: '' }
];

@Component({
  selector: 'app-pac-sidebar',
  templateUrl: './pac-sidebar.component.html',
  styleUrls: ['./pac-sidebar.component.css']
})
export class PacSidebarComponent implements OnInit {
  menuItems: any[];
  constructor(private logovanjeService: LogovanjeServiceService) { }



  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ( window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  logout() {
    this.logovanjeService.logout();

  }

}

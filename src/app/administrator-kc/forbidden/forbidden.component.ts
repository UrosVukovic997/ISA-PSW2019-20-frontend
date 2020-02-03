import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogovanjeServiceService} from '../../service/logovanjeService/logovanje-service.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  constructor(private router: Router, private logovanjeService: LogovanjeServiceService) { }

  ngOnInit() {
  }

  logout() {
    this.logovanjeService.logout();

  }

}

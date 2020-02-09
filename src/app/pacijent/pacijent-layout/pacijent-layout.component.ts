import { Component, OnInit } from '@angular/core';
import {LogovanjeServiceService} from '../../service/logovanjeService/logovanje-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pacijent-layout',
  templateUrl: './pacijent-layout.component.html',
  styleUrls: ['./pacijent-layout.component.css']
})
export class PacijentLayoutComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUserRole') !== 'pacijent') {
      this.router.navigate(['/forbidden']);
    }
  }



}

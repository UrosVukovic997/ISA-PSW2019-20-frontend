import { Component, OnInit } from '@angular/core';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';

@Component({
  selector: 'app-odmor-odsustvo-sestra',
  templateUrl: './odmor-odsustvo-sestra.component.html',
  styleUrls: ['./odmor-odsustvo-sestra.component.css']
})
export class OdmorOdsustvoSestraComponent implements OnInit {
  loading;
  odsodmor: any = [];
  podaci: any = [];

  constructor(private sestraService: SestraServiceService) { }

  ngOnInit() {
    this.ucitajPodatke();
  }

  ucitajPodatke() {
    this.sestraService.getPodatke(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
        this.podaci = data;
      }
    );
  }

}

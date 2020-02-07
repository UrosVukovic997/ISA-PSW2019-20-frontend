import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';

@Component({
  selector: 'app-pacijent-list',
  templateUrl: './pacijent-list.component.html',
  styleUrls: ['./pacijent-list.component.css']
})
export class PacijentListComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private sestraService: SestraServiceService) { }
  pacijenti: any = [];
  klinika: any;

  ngOnInit() {
    this.getKlinika();
    this.ucitajPacijente();
  }

  getKlinika() {
    this.sestraService.getNazivKlinike(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
      this.klinika = data;
      }
    );
  }
  ucitajPacijente() {
    this.sestraService.getAllPatients(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
        this.pacijenti = data;
      }
    );
  }
  karton(jbo) {
    this.router.navigate(['sestra/kartoni/' + jbo ]);
  }
}

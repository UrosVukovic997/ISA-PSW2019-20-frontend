import {Component, Input, OnInit} from '@angular/core';
/*import { RegZahtrviService } from '../../service/administrator-kc-service/reg-zahtrvi.service';*/
import { Router } from '@angular/router';
import {ZapocniPregledService} from '../../service/lekar-kc-service/zapocni-pregled.service';
import { Pacijent } from '../../shared/utilities/pacijent';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';
import {DatePipe, formatDate} from '@angular/common';
import {SifrarnikService} from '../../service/administrator-kc-service/sifrarnik.service';

@Component({
  selector: 'app-zapocni-pregled',
  templateUrl: './zapocni-pregled.component.html',
  styleUrls: ['./zapocni-pregled.component.css']
})
export class ZapocniPregledComponent implements OnInit {

  constructor(private zapocniPregledService: ZapocniPregledService, private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private sifrarnikService: SifrarnikService) {
  }

  dijagnoze: any = [];
  lekovi: any = [];


  selectedDijagnoze = [];
  selectedLek = [];

  typesOfDijagnoza: {name: string, id: number }[] = [];
  typesOfLek: {name: string, id: number }[] = [];

  compareFunction = (o1: any, o2: any) => o1.id === o2.id;

  ngOnInit() {
    this.ucitajDijagnoze();
    this.ucitajLekove();
  }

  ucitajDijagnoze() {
    this.sifrarnikService.getAllDijagnoze().subscribe((data: {}) => {
      this.dijagnoze = data;
      this.fill();
    }
    );
  }

  ucitajLekove() {
    this.sifrarnikService.getAllDLekove().subscribe((data: {}) => {
      this.lekovi = data;
      this.fillLek();
    }
    );
  }

  fill() {
    for (const dijagnoza of this.dijagnoze) {
      this.typesOfDijagnoza.push({name: dijagnoza.nazivDijagnoze, id: dijagnoza.id});
    }
  }

  fillLek() {
    for (const lek of this.lekovi) {
      this.typesOfLek.push({name: lek.nazivLeka, id: lek.id});
    }
  }


}

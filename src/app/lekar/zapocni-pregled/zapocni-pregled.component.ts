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
  data: any = [];

  dijag: any = [];
  lek: any = [];

  date;

  selectedDijagnoze = [];
  selectedLek = [];

  typesOfDijagnoza: {name: string, id: number }[] = [];
  typesOfLek: {name: string, id: number }[] = [];

  compareFunction = (o1: any, o2: any) => o1.id === o2.id;

  ngOnInit() {
    (document.getElementById('hide2') as HTMLInputElement).hidden = true;
    this.ucitajIzvestaj();

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

  ucitajIzvestaj() {
    this.date = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    this.zapocniPregledService.getAllData(localStorage.getItem('currentUserUsername').toString(), this.date).subscribe((data: {}) => {
      if (data === null) {
        (document.getElementById('hide2') as HTMLInputElement).hidden = false;
        (document.getElementById('hide1') as HTMLInputElement).hidden = true;
        return;
      }
      this.data = data;
      console.log(data);
      this.fillIzabran();
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

  fillIzabran() {
    for (const dijagnoza of this.data.dijagnoze) {
      this.selectedDijagnoze.push({name: dijagnoza.nazivDijagnoze, id: dijagnoza.id});
    }
    this.ucitajDijagnoze();
    for (const lek of this.data.lekovi) {
      this.selectedLek.push({name: lek.nazivLeka, id: lek.id});
    }
    this.ucitajLekove();

  }

  save() {
    console.log(this.selectedLek);
    for (const item1 of this.selectedDijagnoze) {
      for (const d of this.dijagnoze) {
        if (item1.id === d.id) {
          this.dijag.push(d);
        }
      }
    }
    for (const item2 of this.selectedLek) {
      for (const l of this.lekovi) {
        if (item2.id === l.id) {
          this.lek.push(l);
        }
      }
    }
    const text = ((document.getElementById('textArea') as HTMLInputElement).value);

    this.data.dijagnoze = this.dijag;
    this.data.lekovi = this.lek;
    this.data.text = text;
    console.log(this.data);
    this.zapocniPregledService.setIzvestaj(this.data).subscribe();
  }




}

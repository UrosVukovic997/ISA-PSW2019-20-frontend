import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {KlinikaService} from '../../service/administrator-kc-service/klinika.service';
import {KlinikaLekariServiceService} from '../../service/pacijent-service/klinika-lekari-service.service';
import {Termin} from '../../shared/utilities/termin';

@Component({
  selector: 'app-klinike-pacijenta',
  templateUrl: './klinike-pacijenta.component.html',
  styleUrls: ['./klinike-pacijenta.component.css']
})
export class KlinikePacijentaComponent implements OnInit {

  modalOptions: NgbModalOptions;
  odsodmor: any = [];

  constructor(private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private klinikaService: KlinikaService,
              private klinikaLekariService: KlinikaLekariServiceService) {

  }

  pacijenti: any = [];
  lekari: any = [];
  klinike: any = [];
  vreme: any = [];
  closeResult: string;
  emailLekara: any = [];
  spojeno: any = [];
  spojeno1: any = [];
  pocetak: any = [];
  zakazan: any =[];


  optionItems: any = [];
  dropDisabled: boolean;
  selected = '';

  ngOnInit() {
    this.ucitajKlinike();
  }

  ucitajKlinike() {
    this.klinikaService.getKlinPac()
      .subscribe((data: {}) => {
          this.klinike = data;
        }
      );
  }

  open(content, tpk) {
    this.fills(tpk);
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  fills(tpk) {
    for (const item of tpk) {
      this.optionItems.push({id: item.naziv, value: item.naziv, text: item.naziv});
      console.log(item);
    }
  }

  onChange($event) {
    console.log(this.selected);
    this.klinikaLekariService.getLekarPac(this.selected).subscribe((data: {}) => {
      this.lekari = data;
      console.log(this.lekari);
    });
  }

  open1(content, email) {
    this.emailLekara = email;
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onChange1(pocetak) {
    this.pocetak = pocetak;
    // console.log('radi');
    this.spojeno = pocetak + ',' + this.emailLekara;
    this.klinikaLekariService.getVreme(this.spojeno).subscribe((data: {}) => {
      this.vreme = data;
      // console.log(this.vreme);
    });
  }

  fills1() {
    console.log('usao');
    for (const item of this.vreme) {
      this.optionItems.push({id: this.vreme.parsirano1, value: this.vreme.parsirano1, text: this.vreme.parsirano1});
      console.log(item);
    }
  }

  open3(sat) {
    this.spojeno1 = sat + ',' + this.pocetak + ',' + this.emailLekara;
    this.klinikaLekariService.getzakaziPregled(this.spojeno1).subscribe((data: {}) => {
      this.zakazan = data;
      // console.log(this.vreme);
    });
  }

}

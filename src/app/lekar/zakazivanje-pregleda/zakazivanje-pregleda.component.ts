import {Component, Input, OnInit} from '@angular/core';
/*import { RegZahtrviService } from '../../service/administrator-kc-service/reg-zahtrvi.service';*/
import { Router } from '@angular/router';
import {ZakazivanjePregledaService} from '../../service/lekar-kc-service/zakazivanje-pregleda.service';
import { Pacijent } from '../../shared/utilities/pacijent';
import { Pregled } from '../../shared/utilities/pregled';
import { Termin } from '../../shared/utilities/termin';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';

import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

import {TipPregleda} from '../../shared/utilities/tipPregleda';
import {Odsodmor} from "../../shared/utilities/odsodmor";

@Component({
  selector: 'app-zakazivanje-pregleda',
  templateUrl: './zakazivanje-pregleda.component.html',
  styleUrls: ['./zakazivanje-pregleda.component.css'],
})
export class ZakazivanjePregledaComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  pacijentiForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  nazivP = '';
  opisP = '';
  mode = 0;
  dataset = [];
  idL = 1;
  idP;
  btnOds: any;
  operacijaBtn: any;
  pregledBtn: any;
  tpCbx: any;
  type: any;
  dropDisabled: boolean;
  constructor(private zakazivanjePregledaService: ZakazivanjePregledaService,
              private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.pregled = new Pregled();
    this.termin = new Termin();
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  items: any = [];
  tipPregleda: any = [];
  optionItems: any = [];
  optionString: any = [];
  pregled: Pregled;
  termin: Termin;
  operacijaChecked: boolean;
  pregledChecked: boolean;
  selected = '';
  ucitajTipPregleda() {
    this.zakazivanjePregledaService.getTipoviPregleda().subscribe((data: {}) => {
          console.log(data);
          this.items = data;
          console.log(this.items);
          this.fill();
        }
      );
  }
  fill() {
    for ( const item of this.items) {
      this.optionItems.push({id: item.naziv, value: item.naziv, text: item.naziv});
      console.log(item);
    }
  }
  ngOnInit() {
    this.ucitajTipPregleda();
    this.pacijentiForm = this.formBuilder.group({
      naziv: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }
  /*
    ucitajPacijente() {
      this.listaPacijenataService.getAllPacijenti()
        .subscribe((data: {}) => {
            this.pacijenti = data;
          }
        );
    }
  */
  zakazi() {
    if (this.pregledBtn.checked) {
      this.pregled.tipPregledaStr = this.selected;
      this.zakazivanjePregledaService.posaljiPregled(this.pregled, this.termin, this.idL).subscribe(result => this.ngOnInit());
    } else if (this.operacijaBtn.checked) {
      // tslint:disable-next-line:max-line-length
      // this.zakazivanjePregledaService.posaljiOperaciju(this.pregled, this.termin, this.idL, this.idP).subscribe(result => this.ngOnInit());
    }
  }
  onItemChange(value: any) {
    this.operacijaBtn = document.getElementById('operacija');
    this.pregledBtn = document.getElementById('pregled');
    if (this.operacijaBtn.checked) {
      this.operacijaChecked = true;
      this.pregledChecked = false;
      this.dropDisabled = true;
    } else if (this.pregledBtn.checked) {
      this.pregledChecked = true;
      this.operacijaChecked = false;
      this.dropDisabled = false;
    }
  }
}

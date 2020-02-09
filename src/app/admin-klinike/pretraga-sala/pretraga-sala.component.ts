import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {PretragaSalaService} from '../../service/admin-klinike-service/pretraga-sala.service';
import {ZakazivanjePregledaService} from '../../service/lekar-kc-service/zakazivanje-pregleda.service';
import { Pacijent } from '../../shared/utilities/pacijent';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dijagnoza } from '../../shared/utilities/dijagnoza';

import {first} from 'rxjs/operators';
import {Pregled} from '../../shared/utilities/pregled';
import {Sala} from '../../shared/utilities/sala';
import {ListaPacijenataService} from '../../service/lekar-kc-service/lista-pacijenata.service';
import {Termin} from '../../shared/utilities/termin';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-pretraga-sala',
  templateUrl: './pretraga-sala.component.html',
  styleUrls: ['./pretraga-sala.component.css']
})
export class PretragaSalaComponent implements OnInit {
  constructor(private pretragaSalaService: PretragaSalaService,
              private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private service: PretragaSalaService  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
    this.salaId = new Sala();
    this.terminSala = new Termin();
    this.terminZ = new Termin();
  }
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  saleForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  sale: any = [];
  naziv: string;
  terminZ;
  broj: number;
  optionItems: any = [];
  items: any;
  termin: Termin;
  salaId;
  any: any;
  terminSala: any;
  selected = '';
  searchText;
  ngOnInit() {
    this.ucitajSale();
    this.saleForm = this.formBuilder.group({
      imeP: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }
  termine(id) {
    this.pretragaSalaService.getAllTermini(id).subscribe((data: {}) => {
        this.items = data;
        console.log(this.items);
      }
    );
  }
  ucitajSale() {
    this.pretragaSalaService.getAllSale()
      .subscribe((data: {}) => {
          this.sale = data;
        }
      );
  }
  Search() {
    if (this.naziv !== '') {
      this.sale = this.sale.filter( res => {
        return res.naziv.toLocaleLowerCase().match(this.naziv.toLocaleLowerCase());
      });
    } else if (this.naziv === '') {
      this.ngOnInit();
    }
  }
  Search2() {
   // let num = 3;//number
   // let stringForm = num.toString();
    if (this.broj.toString() !== '') {
      this.sale = this.sale.filter( res => {
         // res.broj.toString.toLocaleLowerCase().match(this.broj.toString().toLocaleLowerCase());
         return res.broj.toString().toLocaleLowerCase().match(this.broj.toString().toLocaleLowerCase());
      });
    } else if (this.broj.toString() === '') {
      this.ngOnInit();
    }
  }
  terminiSale(content, id) {
    this.termine(id);
    this.service.getSala(id)
      .subscribe((data: {}) => {
          this.salaId = data;
        }
      );
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  zakazi(content, id) {
    this.service.getSala(id)
      .subscribe((data: {}) => {
          this.salaId = data;
        }
      );
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}




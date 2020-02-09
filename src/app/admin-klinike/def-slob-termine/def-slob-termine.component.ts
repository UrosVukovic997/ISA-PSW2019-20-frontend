import {Component, Input, OnInit} from '@angular/core';
import {
  ModalDismissReasons,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SifrarnikService} from '../../service/administrator-kc-service/sifrarnik.service';
import {Router} from '@angular/router';
import {AdminService} from '../../service/administrator-kc-service/admin.service';
import {KlinikaService} from '../../service/administrator-kc-service/klinika.service';
import {first} from 'rxjs/operators';
import {DefSlobTermineService} from '../../service/admin-klinike-service/def-slob-termine.service';
import {Pregled} from '../../shared/utilities/pregled';
import {Termin} from '../../shared/utilities/termin';

@Component({
  selector: 'app-def-slob-termine',
  templateUrl: './def-slob-termine.component.html',
  styleUrls: ['./def-slob-termine.component.css']
})
export class DefSlobTermineComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  defslobTerForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  items: any = [];
  items2: any = [];
  lekar: any;
  tipPregleda: any;
  optionItems: any = [];
  optionItems2: any = [];
  optionString: any = [];
  pregled: Pregled;
  termin: any = [];
  operacijaChecked: boolean;
  pregledChecked: boolean;
  allSale;
  sale: any = [];
  selected = '';
  selected2 = '';
  operacijaBtn: any;
  pregledBtn: any;
  dropDisabled: boolean;
  dropDisabled2: boolean;
  constructor(private defSlobTermineService: DefSlobTermineService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  ucitajTipPregleda() {
    this.defSlobTermineService.getTipoviPregleda().subscribe((data: {}) => {
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
      this.tipPregleda = item;
    }
  }
  ucitajLekare() {
    this.defSlobTermineService.getAllLekari(this.tipPregleda).subscribe((data: {}) => {
        console.log(data);
        this.items = data;
        console.log(this.items);
        this.fill2();
      }
    );
  }
  fill2() {
    for ( const item2 of this.items) {
      this.optionItems.push({id: item2.naziv, value: item2.naziv, text: item2.naziv});
      console.log(item2);
    }
  }
  ngOnInit() {
    this.ucitajTipPregleda();
    this.ucitajLekare();
    this.defslobTerForm = this.formBuilder.group({
      naziv: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }
  onItemChange(value: any) {
    this.operacijaBtn = document.getElementById('operacija');
    this.pregledBtn = document.getElementById('pregled');
    if (this.operacijaBtn.checked) {
      this.operacijaChecked = true;
      this.pregledChecked = false;
      this.dropDisabled = true;
      this.dropDisabled2 = true;
    } else if (this.pregledBtn.checked) {
      this.pregledChecked = true;
      this.operacijaChecked = false;
      this.dropDisabled = false;
      this.dropDisabled2 = false;
    }
  }
  odaberiSalu(content) {
    this.ucitajTipPregleda();
    this.defSlobTermineService.getAllSale()
      .subscribe((data: {}) => {
          this.allSale = data;
          console.log(this.allSale);
          this.sale = this.allSale;
        }
      );
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
}

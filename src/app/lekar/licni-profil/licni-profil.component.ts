import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LicniProfilLekaraService} from '../../service/lekar-kc-service/licni-profil.service';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Lekar} from '../../shared/utilities/lekar';

@Component({
  selector: 'app-licni-profil',
  templateUrl: './licni-profil.component.html',
  styleUrls: ['./licni-profil.component.css']
})
export class LicniProfilLekaraComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  lekarForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  idL = 1;     ////   Zakucan id zbog registracijeeee!!!!!
  error: string;
  constructor(private licniProfilLekaraService: LicniProfilLekaraService, private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    // this.lekar = new Lekar();
    // this.lekar.onPrescription = false;
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  lekari: any = [];
  // lekar: Lekar;

  azuriraj() {
    // console.log(this.lekar)
    // console.log(this.lekari)
    this.licniProfilLekaraService.save(this.lekari).subscribe(result => this.ngOnInit());
  }
  ngOnInit() {
    this.ucitajProfilLekara();
    this.lekarForm = this.formBuilder.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      email: ['', Validators.required],
      speci: ['', Validators.required],
      korIme: ['', Validators.required],
      lozinka: ['', Validators.required],
      adresa: ['', Validators.required],
      opis: ['', Validators.required],
    });
  }

  ucitajProfilLekara() {
    // tslint:disable-next-line:prefer-const
    this.licniProfilLekaraService.getLekar(this.idL)
      .subscribe((data: {}) => {
          this.lekari = data;
        }
      );
  }
}


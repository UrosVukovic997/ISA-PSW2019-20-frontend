import {Component, Input, OnInit} from '@angular/core';
/*import { RegZahtrviService } from '../../service/administrator-kc-service/reg-zahtrvi.service';*/
import { Router } from '@angular/router';
import {LicniProfilLekaraService} from '../../service/lekar-kc-service/licni-profil.service';
import { Pacijent } from '../../shared/utilities/pacijent';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';

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
  closeResult: string;
  pacijentiForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  nazivP = '';
  opisP = '';
  mode = 0;
  constructor(private licniProfilLekaraService: LicniProfilLekaraService, private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  pacijenti: any = [];

  ngOnInit() {
    // this.ucitajProfilLekara();
    this.pacijentiForm = this.formBuilder.group({
      naziv: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }
/*
  ucitajProfilLekara() {
    this.licniProfilLekaraService.getAllPacijenti()
      .subscribe((data: {}) => {
          this.pacijenti = data;
        }
      );
  }
*/
}


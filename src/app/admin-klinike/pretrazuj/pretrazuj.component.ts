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
import {PretrazujService} from '../../service/admin-klinike-service/pretrazuj.service';
import {Pacijent} from '../../shared/utilities/pacijent';
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {TipPregleda} from '../../shared/utilities/tipPregleda';

@Component({
  selector: 'app-pretrazuj',
  templateUrl: './pretrazuj.component.html',
  styleUrls: ['./pretrazuj.component.css']
})
export class PretrazujComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  adminForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  pretraziForm: FormGroup;
  loading = false;
  submitted = false;
  lekari: any = [];
  tipoviPregleda: any = [];
  constructor(private pretrazujService: PretrazujService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  ngOnInit() {
    this.ucitajLekare();
    this.ucitajTipovePregleda();
    this.pretraziForm = this.formBuilder.group({
      imeP: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }
  ucitajLekare() {
    this.pretrazujService.getAllLekari()
      .subscribe((data: {}) => {
          this.lekari = data;
          console.log(data);
        }
      );
  }
  ucitajTipovePregleda() {
    this.pretrazujService.getAllTipPregleda()
      .subscribe((data: {}) => {
          this.tipoviPregleda = data;
          console.log(data);
        }
      );
  }
}

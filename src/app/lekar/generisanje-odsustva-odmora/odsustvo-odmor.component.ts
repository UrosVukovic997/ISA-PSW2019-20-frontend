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
import {OdsustvoOdmorService} from '../../service/lekar-kc-service/odsustvoOdmor.service';
import {Router} from '@angular/router';
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {Lekar} from '../../shared/utilities/lekar';
import {first} from 'rxjs/operators';
import {Odsodmor} from '../../shared/utilities/odsodmor';


@Component({
  selector: 'app-odsustvo-odmori',
  templateUrl: './odsustvo-odmor.component.html',
  styleUrls: ['./odsustvo-odmor.component.css']
})
export class OdsustvoOdmorComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  idL = 1;
  constructor(private odsustvoOdmorService: OdsustvoOdmorService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  lekari: any = [];
  odsodmor: any = [];
  ngOnInit(): void {
    this.ucitajProfilLekara();
  }

  ucitajProfilLekara() {
    // tslint:disable-next-line:prefer-const
    this.odsustvoOdmorService.getLekar(this.idL)
      .subscribe((data: {}) => {
          this.lekari = data;
          console.log(this.lekari);
        }
      );
  }
  posaljiAdminu() {

  }
  /*
  id: number;
  korIme: string;
  ime: string;
  prezime: string;
  pocetak: Date;
  kraj: Date;
  email: string;
  vrstaOds: boolean;
  */
  posaljiZahtev() {
    console.log(this.odsodmor);
    this.odsustvoOdmorService.posalji(this.odsodmor, this.idL).subscribe(result => this.ngOnInit());
  }
}


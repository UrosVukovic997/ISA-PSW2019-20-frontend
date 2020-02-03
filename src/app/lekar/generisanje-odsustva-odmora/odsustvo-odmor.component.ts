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
  // loading = false;
  // submitted = false;
  lekar: Lekar;
  odsodmor: Odsodmor;
  Godisnji: boolean;
  Odsustvo: boolean;
  btnOds: any;
  idL = 1;
  type: string;
  constructor(private odsustvoOdmorService: OdsustvoOdmorService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
    this.lekar = new Lekar();
    this.odsodmor = new Odsodmor();
  }

  ngOnInit(): void {
    this.ucitajProfilLekara();
  }

  ucitajProfilLekara() {
    // tslint:disable-next-line:prefer-const
    this.odsustvoOdmorService.getLekar(this.idL)
      .subscribe((data) => {
          this.lekar = data;
          console.log(this.lekar);
        }
      );
  }
  posaljiAdminu() {

  }

  posaljiZahtev() {
    this.btnOds = document.getElementById('odsustvo');
    if (this.btnOds.checked) {
      console.log('Odsustvo');
      this.odsodmor.odsustvo = true;
      this.odsodmor.godisnji = false;
      this.odsustvoOdmorService.posalji(this.odsodmor, this.idL).subscribe(result => this.ngOnInit());
    } else {
      console.log('Godisnji');
      this.odsodmor.odsustvo = false;
      this.odsodmor.godisnji = true;
      this.odsustvoOdmorService.posalji(this.odsodmor, this.idL).subscribe(result => this.ngOnInit());
    }
    /*
    if (this.type === 'godisnji') {
      console.log(this.odsodmor);
      this.odsustvoOdmorService.posaljiGodisnji(this.odsodmor, this.idL).subscribe(result => this.ngOnInit());
    } else if (this.type === 'odsustvo') {
      console.log(this.odsodmor);
      this.odsustvoOdmorService.posaljiOdsustvo(this.odsodmor, this.idL).subscribe(result => this.ngOnInit());
    }
    console.log(this.odsodmor);
    */
    // this.odsustvoOdmorService.posalji(this.odsodmor, this.idL).subscribe(result => this.ngOnInit());
  }
  /*
  imaGodisnji() {
    this.router.navigate(['/godisnji']);
  }

  imaOdsustvo() {
    this.router.navigate(['/odsustvo']);
  }
  */

  onItemChange(value: any) {
    this.type = value.target.value;
    console.log(value);
    console.log(value.target.checked);
  }

}


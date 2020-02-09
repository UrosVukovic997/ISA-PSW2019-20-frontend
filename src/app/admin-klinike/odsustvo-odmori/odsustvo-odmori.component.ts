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
import {OdsustvoOdmoriService} from '../../service/admin-klinike-service/odsustvo-odmori.service';
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {MedOsoblje} from '../../shared/utilities/medOsoblje';

@Component({
  selector: 'app-odsustvo-odmori',
  templateUrl: './odsustvo-odmori.component.html',
  styleUrls: ['./odsustvo-odmori.component.css']
})
export class OdsustvoOdmoriComponent implements OnInit {
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
  pregled: Pregled;
  termini: any = [];
  odsodmori: any = [];
  sale: any = [];
  selected = '';
  medOsoblje;
  constructor(private odsustvoOdmorService: OdsustvoOdmoriService, private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
    this.medOsoblje = new MedOsoblje();
  }

  ngOnInit() {
    this.getAllOdsuOdmor();
    // this.getAllTerminiOdOd();
    this.defslobTerForm = this.formBuilder.group({
      naziv: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }

  getAllOdsuOdmor() {
    this.odsustvoOdmorService.getAllOdsuOdmor()
      .subscribe((data: {}) => {
          this.odsodmori = data;
        }
      );
  }

  /*
  getAllTerminiOdOd() {
    this.odsustvoOdmorService.getAllTerminiOdOd()
      .subscribe((data: {}) => {
          this.termini = data;
        }
      );
  }
 */

  // odobriOdbij(odoOdb,odsOd.id)
  odobriOdbij(content, id) {
    this.odsustvoOdmorService.getProfil(id)
      .subscribe((data: {}) => {
          this.medOsoblje = data;
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
  obrisi(id) {
  }
}

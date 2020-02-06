import {Component, Input, OnInit} from '@angular/core';
/*import { RegZahtrviService } from '../../service/administrator-kc-service/reg-zahtrvi.service';*/
import { Router } from '@angular/router';
import {ListaPacijenataService} from '../../service/lekar-kc-service/lista-pacijenata.service';
import { Pacijent } from '../../shared/utilities/pacijent';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dijagnoza } from '../../shared/utilities/dijagnoza';

import {first} from 'rxjs/operators';

@Component({
  selector: 'app-lista-pacijenata',
  templateUrl: './lista-pacijenata.component.html',
  styleUrls: ['./lista-pacijenata.component.css']
})
export class ListaPacijenataComponent implements OnInit {
  constructor(private listaPacijenataService: ListaPacijenataService, private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private service: ListaPacijenataService ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
    this.pacijentProf = new Pacijent();
    this.pacijentDijag = new Dijagnoza();
  }
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
  imeP;
  prezimeP;
  emailP;
  adresaP;
  gradP;
  drzavaP;
  brojTelefonaP;
  jboP;
  korIP;
  mode = 0;
  component;
  pacijentProf;
  pacijentDijag;
  selected = '';
  items: any;

  pacijenti: any = [];
  optionItems: any [];
  ngOnInit() {
    this.ucitajPacijente();
    this.pacijentiForm = this.formBuilder.group({
      imeP: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }

  ucitajPacijente() {
    this.listaPacijenataService.getAllPacijenti()
      .subscribe((data: {}) => {
          this.pacijenti = data;
        }
      );
  }
  /*
  profil(id) {
    this.service.profilPacijenta(id).subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/lekar-kc/listapacijenata']);
    });
  }
  */
  obrisi(id) {
    this.service.obrisiPacijenta(id).subscribe();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/lekar-kc/listapacijenata']);
    });
  }
  profilPacijenta(content, id) {
    this.service.profilPacijenta(id)
          .subscribe((data: {}) => {
        this.pacijentProf = data;
      }
    );
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  dijagnozePregleda(id) {
    this.listaPacijenataService.dijagPacijenta(this.pacijenti.id).subscribe((data: {}) => {
        console.log(data);
        this.items = data;
        console.log(this.items);
        this.fill();
      }
    );
  }
  fill() {
    for (const item of this.items) {
      this.optionItems.push({id: item.nazivDijagnoze, value: item.nazivDijagnoze, text: item.nazivDijagnoze});
      console.log(item);
    }
  }
  dijagnozePacijenta(content, id) {
    this.dijagnozePregleda(id);
    this.service.dijagPacijenta(id)
      .subscribe((data: {}) => {
          this.pacijentDijag = data;
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


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

@Component({
  selector: 'app-reg-admin',
  templateUrl: './reg-admin.component.html',
  styleUrls: ['./reg-admin.component.css']
})
export class RegAdminComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  adminForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;

  constructor(private adminService: AdminService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private klinikaService: KlinikaService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  admini: any = [];
  items: any = [];
  optionItems: any = [];
  selected = '';

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      lozinka: ['', Validators.required],
    });
    this.ucitajNaziveKlinika();

  }

  ucitajNaziveKlinika() {
    this.klinikaService.getAllNames().subscribe((data: {}) => {
        this.items = data;
        this.fill();
      }
    );
  }
  /*
  id: number;
  naziv: string;
  obrisan: boolean;
  cena: number;
  */
  fill() {
    for ( const item of this.items) {
      this.optionItems.push({id: item, value: item, text: item});
      console.log(item);
    }
  }

  onChange($event) {
    this.klinikaService.getAllByKlinika(this.selected).subscribe((data: {}) => {
      this.admini = data;
    });
  }

  open(content) {
    this.myModalTitle = 'Registruj administratora';
    this.modalService.open(content, this.modalOptions).result.then((result) => {
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

  get f() { return this.adminForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.adminForm.invalid) {
      console.log('ret');
      return;
    }
    if (this.selected === '') {
      console.log('Izaberite kliniku!');
      return;
    }
    this.loading = true;
    this.klinikaService.dodajAdmina(this.f.ime.value, this.f.prezime.value, this.f.email.value, this.f.username.value,
      this.f.lozinka.value, this.selected).pipe(first()).subscribe(
      data => {
        this.modalService.dismissAll();
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/admin-kc/registrujadministratora']);
        });
      },
      error => {
        //        this.alertService.error(error);
        this.loading = false;
      });

  }

}

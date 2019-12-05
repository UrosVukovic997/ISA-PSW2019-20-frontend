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
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {Lek} from '../../shared/utilities/lek';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-sif-lekova',
  templateUrl: './sif-lekova.component.html',
  styleUrls: ['./sif-lekova.component.css']
})
export class SifLekovaComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  lekForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  nazivL = '';
  opisL = '';
  mode = 0;
  constructor(private sifrarnikService: SifrarnikService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  lekovi: any = [];

  ngOnInit() {
    this.ucitajLekove();
    this.lekForm = this.formBuilder.group({
      naziv: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }

  ucitajLekove() {
    this.sifrarnikService.getAllDLekove().subscribe((data: {}) => {
      this.lekovi = data; }
    );
  }

  obrisi(id) {
    this.sifrarnikService.obrisiDLek(id).subscribe();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin-kc/sifarniklekova']);
    });
  }

  izmeni(content, i) {
    const l =  (this.lekovi[i]) as Lek;
    this.myModalTitle = 'Izmeni lek -' + l.nazivLeka;
    this.nazivL = l.nazivLeka;
    this.opisL = l.opisLeka;
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {
    this.myModalTitle = 'Novi lek';
    this.nazivL = '';
    this.opisL = '';
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

  get f() { return this.lekForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.lekForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.mode === 0) {
      this.sifrarnikService.dodajLek(this.f.naziv.value, this.f.opis.value).pipe(first()).subscribe(
        data => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/admin-kc/sifarniklekova']);
          });
        },
        error => {
          //        this.alertService.error(error);
          this.loading = false;
        });
    } else {
      this.sifrarnikService.dodajLek(this.f.naziv.value, this.f.opis.value).pipe(first()).subscribe(
        data => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/admin-kc/sifarniklekova']);
          });
        },
        error => {
          //        this.alertService.error(error);
          this.loading = false;
        });
      }
  }

}

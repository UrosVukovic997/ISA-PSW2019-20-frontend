import {Component, Input, OnInit} from '@angular/core';
import { Klinika } from '../../shared/utilities/klinika';
import {Router} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KlinikaService} from '../../service/administrator-kc-service/klinika.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-reg-kliniku',
  templateUrl: './reg-kliniku.component.html',
  styleUrls: ['./reg-kliniku.component.css']
})
export class RegKlinikuComponent implements OnInit {

  modalOptions: NgbModalOptions;
  closeResult: string;
  klinikaForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  nazivK = '';
  grad = '';
  mode = 0;
  constructor(private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private service: KlinikaService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  klinike: any = [];

  ngOnInit() {
    this.ucitajKlinike();
    this.klinikaForm = this.formBuilder.group({
      nazivKlinike: ['', Validators.required],
      grad: ['', Validators.required]
    });
  }

  ucitajKlinike() {
    this.service.getAll()
      .subscribe((data: {}) => {
          this.klinike = data;
        }
      );
  }

  obrisi(id) {
    this.service.obrisiKliniku(id).subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/admin-kc/registrujkliniku']);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.klinikaForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.mode === 0) {
      this.service.dodaj(this.f.nazivKlinike.value, this.f.grad.value).pipe(first()).subscribe(
        data => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/admin-kc/registrujkliniku']);
          });
        },
        error => {
          //        this.alertService.error(error);
          this.loading = false;
        });
    } else {
      this.service.dodaj(this.f.nazivKlinike.value, this.f.grad.value).pipe(first()).subscribe(
        data => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/admin-kc/registrujkliniku']);
          });
        },
        error => {
          //        this.alertService.error(error);
          this.loading = false;
        });
    }
  }

  open(content) {
    this.myModalTitle = 'Registruj kliniku';
    this.nazivK = '';
    this.grad = '';
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  get f() { return this.klinikaForm.controls; }

}

import {Component, OnInit, TemplateRef} from '@angular/core';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';
import {Sestra} from '../../shared/utilities/sestra';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Password} from '../../shared/utilities/password';

@Component({
  selector: 'app-profil-sestra',
  templateUrl: './profil-sestra.component.html',
  styleUrls: ['./profil-sestra.component.css']
})
export class ProfilSestraComponent implements OnInit {

  profilForm: FormGroup;
  passwordForm: FormGroup;
  loading = false;
  loading2 = false;
  submitted = false;
  submitted2 = false;
  modalOptions: NgbModalOptions;
  closeResult: string;

  constructor(private sestraService: SestraServiceService,  private formBuilder: FormBuilder, private router: Router,
              private modalService: NgbModal) { }

  podaci: any = [];

  ngOnInit() {
    this.profilForm = this.formBuilder.group({
      ime: [''],
      prezime: [''],
      email: [''],
      username: [''],
      adresa: [''],
    });
    this.passwordForm = this.formBuilder.group({
      stara: ['', Validators.required],
      nova: ['', Validators.required],
    });
    this.ucitajPodatke();
  }

  ucitajPodatke() {
    this.sestraService.getPodatke(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
        this.podaci = data;
      }
    );
  }



  get f() { return this.passwordForm.controls; }

  onSubmit() {
    this.submitted = true;
    const ime = ((document.getElementById('ime') as HTMLInputElement).value);
    const prezime = ((document.getElementById('prezime') as HTMLInputElement).value);
    const username = ((document.getElementById('username') as HTMLInputElement).value);
    const adresa = ((document.getElementById('adresa') as HTMLInputElement).value);
    const email = ((document.getElementById('email') as HTMLInputElement).value);

    this.loading = true;
    const sestra = new Sestra(ime, prezime, email, username, adresa);
    console.log(sestra);
    this.sestraService.editProfil(sestra).pipe(first()).subscribe(
      data => {
        this.loading = false;
        localStorage.setItem('currentUserUsername', username);

      },
      error => {
        //        this.alertService.error(error);
        this.loading = false;
      });
  }

  passwordModal(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  promeniPassword() {
    this.submitted2 = true;

    if (this.passwordForm.invalid) {
      console.log('ret');
      return;
    }

    this.loading2 = true;
    const password = new Password(localStorage.getItem('currentUserUsername'), this.f.stara.value, this.f.nova.value);
    console.log(this.passwordForm.value);
    console.log(password);
    this.sestraService.updatePassword( password ).pipe(first()).subscribe(
      data => {
        this.loading2 = false;
        this.modalService.dismissAll();
      },
      error => {
        //        this.alertService.error(error);
        this.loading2 = false;
        console.log(error);
      });

  }


}

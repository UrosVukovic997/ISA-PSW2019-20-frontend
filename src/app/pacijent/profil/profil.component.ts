import { Component, OnInit } from '@angular/core';
import {RegZahtrviService} from '../../service/administrator-kc-service/reg-zahtrvi.service';
import {Router} from '@angular/router';
import {ProfilPacijentaService} from '../../service/pacijent-service/profil-pacijenta.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {PacijentEdit} from '../../shared/utilities/pacijent_edit';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  loading1 = false;
  loading2 = false;
  submitted = false;
  error: string;


  id: number;
  pacijent: any = [];
  constructor(private pps: ProfilPacijentaService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit( ) {
    this.ucitajZahteve();
    this.registerForm = this.formBuilder.group({
      imePacijenta: ['', Validators.required],
      prezimePacijenta: ['', Validators.required] ,
      adresa: ['', Validators.required],
      grad: ['', Validators.required],
      drzava: ['', Validators.required],
      brojTelefona: ['', Validators.required],
      username: ['', Validators.required],
      rodjen: ['', Validators.required]
    });
  }

  ucitajZahteve() {
    this.pps.getByUsername(localStorage.getItem('currentUserUsername').toString())
      .subscribe((data: {}) => {
          this.pacijent = data;
          console.log(this.pacijent);
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    console.log('ulaz');
    // stop here if form is invalid
    /*if (this.registerForm.invalid) {
      console.log('losa');
      return;
    }*/

    const imePacijenta = ((document.getElementById('imePacijenta') as HTMLInputElement).value);
    const prezimePacijenta = ((document.getElementById('prezimePacijenta') as HTMLInputElement).value);
    const adresa = ((document.getElementById('adresa') as HTMLInputElement).value);
    const grad = ((document.getElementById('grad') as HTMLInputElement).value);
    const drzava = ((document.getElementById('drzava') as HTMLInputElement).value);
    const brojTelefona = ((document.getElementById('brojTelefona') as HTMLInputElement).value);
    const username = ((document.getElementById('username') as HTMLInputElement).value);
    const rodjen = ((document.getElementById('rodjen') as HTMLInputElement).value);
    const email = ((document.getElementById('email') as HTMLInputElement).value);

    const pac = new PacijentEdit();
    pac.imePacijenta = imePacijenta;
    pac.prezimePacijenta = prezimePacijenta;
    pac.adresa = adresa;
    pac.grad = grad;
    pac.drzava = drzava;
    pac.brojTelefona = brojTelefona;
    pac.username = username;
    pac.rodjen = rodjen;
    pac.email = email;

    this.loading = true;
    this.pps.izmeni(pac)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/profilPacijenta/profil'], { queryParams: { registered: true }});
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  open111() {
    const jbo = ((document.getElementById('jbo') as HTMLInputElement).value);
    this.router.navigate(['profilPacijenta/pregledi/' + jbo ]);
  }

  open112() {
    const jbo = ((document.getElementById('jbo') as HTMLInputElement).value);
    this.router.navigate(['profilPacijenta/karton/' + jbo ]);
  }

}

import { Component, OnInit } from '@angular/core';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';
import {Sestra} from '../../shared/utilities/sestra';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-profil-sestra',
  templateUrl: './profil-sestra.component.html',
  styleUrls: ['./profil-sestra.component.css']
})
export class ProfilSestraComponent implements OnInit {

  profilForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private sestraService: SestraServiceService,  private formBuilder: FormBuilder) { }

  podaci: {};

  ngOnInit() {
    this.profilForm = this.formBuilder.group({
      ime: [''],
      prezime: [''],
      email: [''],
      username: [''],
      adresa: [''],
    });
    this.ucitajPodatke();
  }

  ucitajPodatke() {
    this.sestraService.getPodatke(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
        this.podaci = data;
      }
    );
  }

  sacuvaj() {

  }

  get f() { return this.profilForm.controls; }

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

      },
      error => {
        //        this.alertService.error(error);
        this.loading = false;
      });
  }
}

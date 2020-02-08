import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';
import {Router} from '@angular/router';
import {Sestra} from '../../shared/utilities/sestra';
import {first} from 'rxjs/operators';
import {Password} from '../../shared/utilities/password';
import {AdminService} from '../../service/administrator-kc-service/admin.service';
import {ProfileService} from '../../service/administrator-kc-service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profilForm: FormGroup;
  passwordForm: FormGroup;
  loading = false;
  loading2 = false;
  submitted = false;
  submitted2 = false;
  modalOptions: NgbModalOptions;
  closeResult: string;

  podaci: any = {};

  constructor(private profileService: ProfileService, private formBuilder: FormBuilder, private router: Router,
              private modalService: NgbModal) { }

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
    this.profileService.getProfil(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
       this.podaci = data;
      }
    );

  }

  get f() { return this.passwordForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.podaci.ime = ((document.getElementById('ime') as HTMLInputElement).value);
    this.podaci.prezime = ((document.getElementById('prezime') as HTMLInputElement).value);
    this.podaci.username = ((document.getElementById('username') as HTMLInputElement).value);

    this.loading = true;
    console.log(this.podaci);

    this.profileService.editProfil(this.podaci).pipe(first()).subscribe(
      data => {
        this.loading = false;
        localStorage.setItem('currentUserUsername', this.podaci.username);

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

    this.profileService.updatePassword( password ).pipe(first()).subscribe(
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

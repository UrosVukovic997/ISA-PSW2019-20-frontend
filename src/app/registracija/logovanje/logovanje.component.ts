import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../service/registracijaService/authentication.service';
import {LogovanjeServiceService} from '../../service/logovanjeService/logovanje-service.service';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LogovanjeServiceService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/registracija']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['pacijent']
    });
    /*   // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

       // show success message on registration
       if (this.route.snapshot.queryParams['registered']) {
         this.success = 'Registration successful';
       }
     */}

  get myForm() {
    return this.loginForm.get('gender');
  }

  get MyUser() {
    return this.loginForm.get('email');
  }


  // convenience getter for easy access to form fields

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.error = null;
    this.success = null;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.loginForm.value, this.myForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          if (this.myForm.value === 'pacijent') {
            localStorage.setItem('currentUserRole', 'pacijent');
            this.router.navigate(['/profilPacijenta/profil']);
          } else {
            if (this.myForm.value === 'administratorKlinickog') {
              this.router.navigate(['/admin-kc']);
              localStorage.setItem('currentUserRole', 'admin-kc');
            } else {
              if (this.myForm.value === 'lekar') {
                this.router.navigate(['/lekar-kc']);
                localStorage.setItem('currentUserRole', 'lekar');
              } else {
                if (this.myForm.value === 'medicinskaSestra') {
                  this.router.navigate(['/sestra']);
                  localStorage.setItem('currentUserRole', 'medicinskaSestra');
                } else {
                  if (this.myForm.value === 'administratorKlinike') {
                    this.router.navigate(['/admin']);
                    localStorage.setItem('currentUserRole', 'administratorKlinike');
                  } else {
                    this.router.navigate(['/logovanje']);
                  }
                }
              }
            }
          }
        },
        error => {
          this.error = error;
          console.log(error);
          this.loading = false;
        });
  }


}

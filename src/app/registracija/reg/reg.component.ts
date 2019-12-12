import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../../service/registracijaService/user.service';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      imePacijenta: ['', Validators.required],
      prezimePacijenta: ['', Validators.required] ,
      email: ['', Validators.required],
      password: ['', Validators.required],
      adresa: ['', Validators.required],
      grad: ['', Validators.required],
      drzava: ['', Validators.required],
      brojTelefona: ['', Validators.required],
      jbo: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('ulaz');
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/logovanje'], { queryParams: { registered: true }});
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}

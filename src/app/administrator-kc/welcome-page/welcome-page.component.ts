import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PotvrdaService} from '../../service/administrator-kc-service/potvrda.service';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from '../../service/administrator-kc-service/profile.service';
import {Password} from '../../shared/utilities/password';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  passwordForm: FormGroup;
  loading = false;
  submitted = false;
  modalOptions: NgbModalOptions;
  private modalRef: NgbModalRef;
  @ViewChild('childmodal', { static: false }) child: any;

  constructor(private formBuilder: FormBuilder, private potvrdaService: PotvrdaService, private modalService: NgbModal,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
    console.log(localStorage.getItem('currentUserRole'));

    this.passwordForm = this.formBuilder.group({
      stara: ['', Validators.required],
      nova: ['', Validators.required],
    });
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
    this.provera();

  }

  provera() {
    this.potvrdaService.prviPut(localStorage.getItem('currentUserUsername').toString()).subscribe( data => {
      if (data) {
        console.log('modal');
        this.modalRef = this.modalService.open(this.child, this.modalOptions);
      }
    });
  }

  get f() { return this.passwordForm.controls; }

  promeniPassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      console.log('ret');
      return;
    }

    this.loading = true;

    this.profileService.updatePassword(new Password(localStorage.getItem('currentUserUsername'),
      this.f.stara.value, this.f.nova.value)).subscribe(data => {
      this.loading = false;
      this.modalRef.close();
      this.ngOnInit();

    },
      error => {
        //        this.alertService.error(error);
        this.loading = false;
        this.modalService.open('Uneli ste pogresnu staru lozinku');
      });


  }
}

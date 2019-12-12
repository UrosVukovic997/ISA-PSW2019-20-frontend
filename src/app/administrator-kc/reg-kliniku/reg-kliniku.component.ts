import {Component, Input, OnInit} from '@angular/core';
import { Klinika } from '../../shared/utilities/klinika';
import {Router} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  klinike: any = [];

  ngOnInit() {
    this.klinikaForm = this.formBuilder.group({
      nazivKlinike: ['', Validators.required],
      grad: ['', Validators.required]
    });
  }

  onSubmit() {}

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

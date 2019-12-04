import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SifrarnikService} from '../../service/administrator-kc-service/sifrarnik.service';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-sig-dijagnoza',
  templateUrl: './sig-dijagnoza.component.html',
  styleUrls: ['./sig-dijagnoza.component.css']
})
export class SigDijagnozaComponent implements OnInit {

  modalOptions: NgbModalOptions;
  closeResult: string;
  dijalogForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;

  constructor(private sifrarnikService: SifrarnikService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };

  }
    dijagnoze: any = [];

  ngOnInit() {
    this.ucitajDijagnoze();
    this.dijalogForm = this.formBuilder.group({
      naziv: ['', Validators.required],
      opis: ['', Validators.required]
    });
  }

  ucitajDijagnoze() {
    this.sifrarnikService.getAllDijagnoze().subscribe((data: {}) => {
      this.dijagnoze = data; }
    );
  }


  obrisi(id) {
    this.sifrarnikService.obrisiDijagnozu(id).subscribe();
    console.log('obrisi');
  }
  izmeni(id) {}
  dodaj() {}

  open(content) {
    this.myModalTitle = 'Nova dijagnoza';
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

  get f() { return this.dijalogForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.dijalogForm.invalid) {
      return;
    }

    this.loading = true;

    this.sifrarnikService.dodajDijagnozu(this.f.naziv.value, this.f.naziv.value).pipe(first()).subscribe(
        data => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/admin-kc/sifarnikdijagnoza']);
          });
        },
        error => {
  //        this.alertService.error(error);
          this.loading = false;
        });
  }
}

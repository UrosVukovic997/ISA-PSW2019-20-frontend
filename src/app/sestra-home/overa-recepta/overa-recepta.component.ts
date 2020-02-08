import { Component, OnInit } from '@angular/core';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overa-recepta',
  templateUrl: './overa-recepta.component.html',
  styleUrls: ['./overa-recepta.component.css']
})
export class OveraReceptaComponent implements OnInit {

  recepti: any = [];
  lekovi: any = [];

  modalOptions: NgbModalOptions;
  closeResult: string;


  constructor(private sestraService: SestraServiceService, private modalService: NgbModal) { }

  ngOnInit() {
    this.ucitajRecepte();
  }

  ucitajRecepte() {
    this.sestraService.getRecepte(localStorage.getItem('currentUserUsername').toString()).subscribe((data: {}) => {
        this.recepti = data;
      }
    );
  }

  overi(id) {
    this.sestraService.overi(id).subscribe((data: {}) => {
        this.ngOnInit();
      }
    );

  }

  lekModal(content, lekovi) {
    this.lekovi = lekovi;
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}

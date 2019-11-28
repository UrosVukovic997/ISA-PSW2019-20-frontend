import { Component, OnInit } from '@angular/core';
import { RegZahtrviService } from '../../service/administrator-kc-service/reg-zahtrvi.service';

@Component({
  selector: 'app-lista-reg-zahteva',
  templateUrl: './lista-reg-zahteva.component.html',
  styleUrls: ['./lista-reg-zahteva.component.css']
})
export class ListaRegZahtevaComponent implements OnInit {

  constructor( private regZahteviService: RegZahtrviService) { }
  zahtevi: any = [];
  ngOnInit() {
  this.ucitajZahteve();
  }
/*
  ucitajZahteve() {
    this.regZahteviService.getAllRegRequest()
      .subscribe(
        (data) => {
          console.log(data);
          this.zahtevi = Object.assign([], (data));
        }
      );


  }
      */
  ucitajZahteve() {
    this.regZahteviService.getAllRegRequest()
      .subscribe((data: {}) => {
          this.zahtevi = data;
        }
      );
  }

  odobri(id) {
    this.regZahteviService.odobriPacijenta(id).subscribe();


  }
  obrisi(id) {
    this.regZahteviService.obrisiPacijenta(id).subscribe();
  }
}

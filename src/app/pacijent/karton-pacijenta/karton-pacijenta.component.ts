import { Component, OnInit } from '@angular/core';
import {ProfilPacijentaService} from '../../service/pacijent-service/profil-pacijenta.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-karton-pacijenta',
  templateUrl: './karton-pacijenta.component.html',
  styleUrls: ['./karton-pacijenta.component.css']
})
export class KartonPacijentaComponent implements OnInit {
  pacijent: any = [];
  constructor(private pps: ProfilPacijentaService, private router: Router,
              private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const jbo = this.route.snapshot.params.jbo;
    this.ucitajKarton(jbo);
  }

  ucitajKarton(jbo) {
    this.pps.getKartonPac(jbo)
      .subscribe((data: {}) => {
        this.pacijent = data;
        }
      );
  }
}

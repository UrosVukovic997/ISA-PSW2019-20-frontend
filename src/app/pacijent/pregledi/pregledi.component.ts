import { Component, OnInit } from '@angular/core';
import {KlinikaService} from '../../service/administrator-kc-service/klinika.service';
import {PreglediServiceService} from '../../service/pacijent-service/pregledi-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pregledi',
  templateUrl: './pregledi.component.html',
  styleUrls: ['./pregledi.component.css']
})
export class PreglediComponent implements OnInit {

  constructor(private preglediServiceService: PreglediServiceService, private route: ActivatedRoute) { }

  pregledi: any = [];

  ngOnInit() {
    const jbo = this.route.snapshot.params.jbo;
    this.ucitajPreglede(jbo);
  }

  ucitajPreglede(jbo) {
    this.preglediServiceService.getPregledPac(jbo)
      .subscribe((data: {}) => {
          this.pregledi = data;
        }
      );
  }

}

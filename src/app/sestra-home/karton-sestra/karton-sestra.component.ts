import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';
import {ActivatedRoute} from '@angular/router';
import {Karton} from '../../shared/utilities/karton';

@Component({
  selector: 'app-karton-sestra',
  templateUrl: './karton-sestra.component.html',
  styleUrls: ['./karton-sestra.component.css']
})
export class KartonSestraComponent implements OnInit {

  searchForm: FormGroup;
  submittedSearch = false;
  searchControl;
  karton: any = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private sestraService: SestraServiceService) { }

  ngOnInit() {
    this.searchControl = new FormControl(['', [Validators.required, Validators.pattern('^[0-9]*$')]]);
    (document.getElementById('tablaDijagnoze') as HTMLInputElement).hidden = true;
    const jbo = this.route.snapshot.params.jbo;
    console.log('Jbo: ' + jbo);
    if (jbo !== undefined) {
      this.getData(jbo);
    }
  }

  get f() { return this.searchForm.controls; }



  search() {
    this.submittedSearch = true;

    const jbo = ((document.getElementById('searchInput') as HTMLInputElement).value);
    if (jbo === null || jbo === '') {
      console.log('ne moze biti prazno');
      return;
    }
    console.log('search');
    this.getData(jbo);

  }

  izmeni() {
    const broj = this.karton.broj;
    const krvnaGrupa = ((document.getElementById('krvnaGrupa') as HTMLInputElement).value);
    const dioptrija = ((document.getElementById('dioptrija') as HTMLInputElement).value);

   // const karton = new Karton(0, broj , krvnaGrupa, dioptrija, [], [], 0, '', '');

    this.karton.krvnaGrupa = krvnaGrupa;
    this.karton.dioptrija = dioptrija;
    console.log(this.karton);
    this.sestraService.izmeniKarton(this.karton).pipe(first()).subscribe();
  }

  getData(jbo) {
    this.sestraService.getKarton(jbo).pipe(first()).subscribe(
      data => {
        // this.loading = false;
        this.karton = data;
        console.log(data);
        (document.getElementById('tablaDijagnoze') as HTMLInputElement).hidden = false;

      },
      error => {
        //        this.alertService.error(error);
        // this.loading = false;
        console.log(error);
      });
  }
}

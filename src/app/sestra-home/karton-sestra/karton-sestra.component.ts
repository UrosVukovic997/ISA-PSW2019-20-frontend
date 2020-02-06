import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {SestraServiceService} from '../../service/sestraService/sestra-service.service';

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

  constructor(private formBuilder: FormBuilder, private sestraService: SestraServiceService) { }

  ngOnInit() {
    this.searchControl = new FormControl(['', [Validators.required, Validators.pattern('^[0-9]*$')]]);
    (document.getElementById('tablaDijagnoze') as HTMLInputElement).hidden = true;
    /*
    this.searchForm = this.formBuilder.group({
      search: new FormControl(['', [Validators.pattern('^[0-9]*$'), Validators.required ]])
    });
     */
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

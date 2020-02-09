import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable, pipe, throwError} from 'rxjs';
import {Klinika} from '../../shared/utilities/klinika';
import {Administrator} from '../../shared/utilities/administrator';
import {TipPregleda} from '../../shared/utilities/tipPregleda';
import {catchError} from 'rxjs/operators';
import {Lekar} from '../../shared/utilities/lekar';
import {Sala} from '../../shared/utilities/sala';
import * as url from 'url';
import {Termin} from '../../shared/utilities/termin';
import {Odsodmor} from '../../shared/utilities/odsodmor';
import {MedOsoblje} from '../../shared/utilities/medOsoblje';

@Injectable({
  providedIn: 'root'
})
export class OdsustvoOdmoriService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllOdsuOdmor(): Observable<Odsodmor> {
    return this.http.get<Odsodmor>(this.configService.get_all_odsOdmor_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllTerminiOdOd(): Observable<Termin> {
    return this.http.get<Termin>(this.configService.get_all_TerminiOdOd_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllLekari(pregled): Observable<Lekar> {
    return this.http.get<Lekar>(this.configService.get_all_lekar_url + pregled, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getProfil(id): Observable<MedOsoblje> {
    return this.http.get<MedOsoblje>(this.configService.get_medOsoblje_url + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  /*
  getTipoviPregleda(): Observable<TipPregleda> {
    return this.http.get<TipPregleda>(this.configService.get_tip_pregleda_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllLekari(pregled): Observable<Lekar> {
    return this.http.get<Lekar>(this.configService.get_all_lekar_url + pregled, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllSale(): Observable<Sala> {
    return this.http.get<Sala>(this.configService.get_all_Sale, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  /*
  getAllSale(): Observable<Sala> {
    return this.http.get<Sala>(url: this.configService.get_all_Sale_url));
  }
  */
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

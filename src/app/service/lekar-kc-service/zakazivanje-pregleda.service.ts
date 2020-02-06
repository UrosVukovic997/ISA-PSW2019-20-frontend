import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { ConfigService } from '../config.service';
import {Pacijent} from '../../shared/utilities/pacijent';
import {TipPregleda} from '../../shared/utilities/tipPregleda';
import {Administrator} from "../../shared/utilities/administrator";

@Injectable({
  providedIn: 'root'
})
export class ZakazivanjePregledaService {

  constructor( private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  posaljiPregled(pregled, termin, idL) {
    return this.http.post(`${this.configService.zakazi_pregled_url + '/' + idL}`, pregled);
  }

  getTipoviPregleda(): Observable<TipPregleda> {
    return this.http.get<TipPregleda>(this.configService.get_tip_pregleda_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  /*
  getAllRegRequest(): Observable<RegZahtev> {
    return this.http.get<RegZahtev>(this.configService.reg_zahtevi_url)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  odobriPacijenta(id): Observable<Response> {
   return this.http.post<Response>(this.configService.odobri_pacijenta_url + id, null)
      .pipe(
    catchError(this.errorHandl)
      );
  }

  obrisiPacijenta(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_pacijenta_url + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
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

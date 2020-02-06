import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { ConfigService } from '../config.service';
import {Pacijent} from '../../shared/utilities/pacijent';

@Injectable({
  providedIn: 'root'
})
export class ListaPacijenataService {

  constructor( private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllPacijenti(): Observable<Pacijent> {
    return this.http.get<Pacijent>(this.configService.get_all_pacijenti_url, this.httpOptions)
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
  */
  obrisiPacijenta(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_pacijentaById_url + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  profilPacijenta(id): Observable<any> {
    return this.http.get<Pacijent>(this.configService.get_pacijentById_url + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  dijagPacijenta(id): Observable<any> {
    return this.http.get<Pacijent>(this.configService.get_dijagPacijentaById_url + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  /*
  profilPacijenta(id): Observable<any> {
    return this.http.get(this.configService.profil_pacijentaById_url + id, this.httpOptions)
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { RegZahtev } from '../../shared/utilities/reg-zahtev';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class RegZahtrviService {

  constructor( private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllRegRequest(): Observable<RegZahtev> {
    return this.http.get<RegZahtev>(this.configService.reg_zahtevi_url)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  odobriPacijenta(id): Observable<any> {
    return this.http.post(this.configService.odobri_pacijenta_url + id, null)
      .pipe(
        retry(1),
    catchError(this.errorHandl)
      );
  }

  obrisiPacijenta(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_pacijenta_url + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }

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
/*
  getAllRegRequest() {
    return this.http.get('http://localhost:8080/api/pacijenti/zahtev')
      .pipe(
        map((response: Response) => {
          const data = response.json();
          return data;
        }),

        catchError((err: Response) => {
          console.log(err);
          return throwError(JSON.parse(err.statusText));
        })
      );

  }

 */
}

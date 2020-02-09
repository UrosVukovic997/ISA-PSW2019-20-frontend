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

@Injectable({
  providedIn: 'root'
})
export class PretragaSalaService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllSale(): Observable<Sala> {
    return this.http.get<Sala>(this.configService.get_all_Sale)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllTermini(id): Observable<Termin> {
    return this.http.get<Termin>(this.configService.get_all_Termini + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getSala(id): Observable<Sala> {
    return this.http.get<Sala>(this.configService.get_salaById + '/' + id, this.httpOptions)
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
}

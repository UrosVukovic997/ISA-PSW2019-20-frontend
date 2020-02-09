import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable, throwError} from 'rxjs';
import {Klinika} from '../../shared/utilities/klinika';
import {Administrator} from '../../shared/utilities/administrator';
import {TipPregleda} from '../../shared/utilities/tipPregleda';
import {Lekar} from '../../shared/utilities/lekar';
import {catchError} from 'rxjs/operators';
import {Pacijent} from '../../shared/utilities/pacijent';

@Injectable({
  providedIn: 'root'
})
export class PretrazujService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllLekari(): Observable<Lekar> {
    return this.http.get<Lekar>(this.configService.get_all_lekar_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllTipPregleda(): Observable<Lekar> {
    return this.http.get<Lekar>(this.configService.get_all_tip_pregleda_url, this.httpOptions)
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

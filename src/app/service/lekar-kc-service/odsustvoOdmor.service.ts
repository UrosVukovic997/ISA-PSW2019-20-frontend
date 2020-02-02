import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable, throwError} from 'rxjs';
import {Pacijent} from '../../shared/utilities/pacijent';
import {catchError, retry} from 'rxjs/operators';
import {Odsodmor} from '../../shared/utilities/odsodmor';
import {Encoding} from 'tslint/lib/utils';
import {Lekar} from '../../shared/utilities/lekar';

@Injectable({
  providedIn: 'root'
})
export class OdsustvoOdmorService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getLekar(id): Observable<Lekar> {
    return this.http.get<Lekar>(this.configService.get_lekar_url + '/' + id, this.httpOptions)
      // return this.http.get<Lekar>(this.configService.get_lekar_url);
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAllPacijenti(): Observable<Pacijent> {
    return this.http.get<Pacijent>(this.configService.get_all_pacijenti_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }

  getAllOdsustvoOdmori(): Observable<Odsodmor> {
    return this.http.get<Odsodmor>(this.configService.reg_odsodmor_url)
      .pipe(
        retry(1),
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


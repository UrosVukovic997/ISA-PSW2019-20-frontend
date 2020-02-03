import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { ConfigService } from '../config.service';
import {Pacijent} from '../../shared/utilities/pacijent';
import {Lekar} from '../../shared/utilities/lekar';

@Injectable({
  providedIn: 'root'
})
export class LicniProfilLekaraService {

  constructor( private http: HttpClient, private configService: ConfigService) { }

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
  save(lekar) {
    return this.http.post(`${this.configService.izmeni_prof_lekara_url}`, lekar);
  }
  //    return this.http.post(`${this.configService.izmeni_prof_lekara_url}`, lekar);
  /*
    id: number;
  ime: string;
  prezime: string;
  email: string;
  specijalnost: string;
  korIme: string;
  lozinka: string;
  klinika: Klinika;
  adresa: string;
  opis: string;
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

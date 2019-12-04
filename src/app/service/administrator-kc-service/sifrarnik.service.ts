import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable, throwError} from 'rxjs';
import {RegZahtev} from '../../shared/utilities/reg-zahtev';
import {catchError, retry} from 'rxjs/operators';
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {Encoding} from 'tslint/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class SifrarnikService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllDijagnoze(): Observable<Dijagnoza> {
    return this.http.get<Dijagnoza>(this.configService.get_all_dijagnoze_url, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }

  obrisiDijagnozu(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_dijagnozu_url + id)
      .pipe(
        catchError(this.errorHandl)
      );
  }

  dodajDijagnozu(naziv, opis): Observable<any> {
    const d = new Dijagnoza();
    d.id = 0;
    d.nazivDijagnoze = naziv;
    d.opisDijagnoze = opis;

    return this.http.post<any>(this.configService.dodaj_dijagnozu_url, d)
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

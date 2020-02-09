import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { ConfigService } from '../config.service';
import {Pacijent} from '../../shared/utilities/pacijent';
import {PacijentSestra} from '../../shared/utilities/pacijent-sestra';
import {Izvestaj} from '../../shared/utilities/izvestaj';

@Injectable({
  providedIn: 'root'
})
export class ZapocniPregledService {

  constructor( private http: HttpClient, private configService: ConfigService) { }

  getAllData(username, date): Observable<Izvestaj> {
    return this.http.post<Izvestaj>(this.configService.get_termin_izvestaj_url, {username, date});
  }

  setIzvestaj(izv): Observable<any> {
    return this.http.post(this.configService.set_izvestaj_url, izv);
  }

  getSlobodneTermine(izv): Observable<any> {
    return this.http.post('http://localhost:8080/api/lekar/slobodniTermini', izv);
  }

  zauzmiTermine(izv): Observable<any> {
    return this.http.post('http://localhost:8080/api/lekar/zakaziDodatniPregled', izv);
  }
}

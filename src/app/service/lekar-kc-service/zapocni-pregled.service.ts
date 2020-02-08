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

  getAllData(username): Observable<Izvestaj> {
    return this.http.get<Izvestaj>(this.configService.get_termin_izvestaj_url + username);
  }
}

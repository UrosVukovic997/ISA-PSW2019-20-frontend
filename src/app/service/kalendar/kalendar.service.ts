import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {KalendarDogadjaj} from '../../shared/utilities/kalendar-dogadjaj';

@Injectable({
  providedIn: 'root'
})
export class KalendarService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAll(): Observable<KalendarDogadjaj> {
    return this.http.get<KalendarDogadjaj>('http://localhost:8080/api/sestra/getDate');
  }
  getLekar(username): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/lekar/getKalendar/' + username);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {KlinikaPac} from '../../shared/utilities/KlinikaPac';

@Injectable({
  providedIn: 'root'
})
export class PreglediServiceService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  getPregledPac(jbo): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_getPregledPac_url + '/' + jbo);
  }
}

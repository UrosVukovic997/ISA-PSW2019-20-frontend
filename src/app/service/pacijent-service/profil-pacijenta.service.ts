import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {Pacijent} from '../../shared/utilities/pacijent';
import {PacijentEdit} from '../../shared/utilities/pacijent_edit';

@Injectable({
  providedIn: 'root'
})
export class ProfilPacijentaService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getByUsername( username ): Observable<PacijentEdit> {
    return this.http.get<PacijentEdit>(this.configService.pacijent_nadji_url + '/' + username);
  }

  izmeni(user) {
    return this.http.post(`${this.configService.izmeni_pacijenta_url}`, user);
  }
}

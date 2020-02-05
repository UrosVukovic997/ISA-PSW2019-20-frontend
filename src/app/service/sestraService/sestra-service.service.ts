import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {Administrator} from '../../shared/utilities/administrator';
import {PacijentSestra} from '../../shared/utilities/pacijent-sestra';
import {Sestra} from '../../shared/utilities/sestra';

@Injectable({
  providedIn: 'root'
})
export class SestraServiceService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAllPatients(username): Observable<PacijentSestra> {
    return this.http.get<PacijentSestra>(this.configService.get_all_patients_sestra_url + '/' + username);
  }

  getNazivKlinike(username): Observable<string> {
    return this.http.get<string>(this.configService.sestra_naziv_klinike_url + '/' + username);
  }


  getPodatke(username): Observable<Sestra> {
    return this.http.get<Sestra>(this.configService.get_profil_data_sestra_url + '/' + username);
  }

  editProfil(sestra): Observable<any> {
    return this.http.post(this.configService.edit_profil_data_sestra_url, sestra);
  }
}

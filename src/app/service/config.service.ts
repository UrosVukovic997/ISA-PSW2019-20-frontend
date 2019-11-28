import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line:variable-name
  private _api_url = 'http://localhost:8080/api';


  get reg_zahtevi_url(): string {
    return this._api_url + '/pacijenti/zahtev';
  }

  get odobri_pacijenta_url(): string {
    return this._api_url + '/registracija/odobri';
  }

  get obrisi_pacijenta_url(): string {
    return this._api_url + '/registracija/obrisi';
  }
}

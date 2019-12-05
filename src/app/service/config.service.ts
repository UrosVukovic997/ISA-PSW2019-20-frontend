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

  get napravi_pacijenta_url(): string {
    return this._api_url + '/pacijenti/registruj';
  }

  get loguj_pacijenta_url(): string {
    return this._api_url + '/pacijenti/logovanje';
  }


  get get_all_dijagnoze_url(): string {
    return this._api_url + '/dijagnoza/getAll';
  }

  get obrisi_dijagnozu_url(): string {
    return this._api_url + '/dijagnoza/obrisi';
  }

  get dodaj_dijagnozu_url(): string {
    return this._api_url + '/dijagnoza/dodaj';
  }

  get get_all_lekove_url(): string {
    return this._api_url + '/lek/getAll';
  }

  get obrisi_lek_url(): string {
    return this._api_url + '/lek/obrisi';
  }

  get dodaj_lek_url(): string {
    return this._api_url + '/lek/dodaj';
  }

}

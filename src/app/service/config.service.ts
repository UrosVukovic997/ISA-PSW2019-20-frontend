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

  get aktiviraj_nalog_url(): string {
    return this._api_url + '/registracija/potvrdi/';
  }

  get obrisi_pacijenta_url(): string {
    return this._api_url + '/registracija/obrisi';
  }

  get napravi_pacijenta_url(): string {
    return this._api_url + '/pacijenti/registruj';
  }

  get loguj_pacijenta_url(): string {
    return this._api_url + '/logovanje/login';
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
  get get_all_pacijenti_url(): string {
    return this._api_url + '/lekar/pacijenti/getAll';
  }

  get reg_odsodmor_url(): string {
    return this._api_url + '/pacijenti/zahtev';
  }

  get get_all_klinike_url(): string {
    return this._api_url + '/klinika/getAll';
  }

  get get_all_klinike_names_url(): string {
    return this._api_url + '/klinika/getAllNames';
  }

  get dodaj_kliniku_url(): string {
    return this._api_url + '/klinika/dodaj';
  }

  get obrisi_kliniku_url(): string {
    return this._api_url + '/klinika/obrisi';
  }

  get get_all_admin_url(): string {
    return this._api_url + '/admin/getAll';
  }

  get dodaj_admin_url(): string {
    return this._api_url + '/admin/dodaj';
  }
  get obrisi_admin_url(): string {
    return this._api_url + '/admin/obrisi';
  }
  get get_lekar_url(): string {
    return this._api_url + '/lekar/licni_profil/getLekar';
  }
  get izmeni_prof_lekara_url(): string {
    return this._api_url + '/lekar/izmeniProfil';
  }
}

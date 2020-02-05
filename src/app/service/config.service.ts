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

  get izmeni_pacijenta_url(): string {
    return this._api_url + '/pacijenti/zamena';
  }

  get loguj_pacijenta_url(): string {
    return this._api_url + '/logovanje';
  }

  get loguj_lekara_url(): string {
    return this._api_url + '/logovanje/lekar';
  }

  get loguj_mst_url(): string {
    return this._api_url + '/logovanje/mst';
  }

  get loguj_admin_url(): string {
    return this._api_url + '/logovanje/admin';
  }

  get loguj_adminkc_url(): string {
    return this._api_url + '/logovanje/adminkc';
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

  get admin_kc_url(): string {
    return this._api_url + '/admin';
  }

  get pacijent_url(): string {
    return this._api_url + '/pacijent';
  }

  get pacijent_nadji_url(): string {
    return this._api_url + '/pacijenti/nadji';
  }

  get get_lekar_url(): string {
    return this._api_url + '/lekar/licni_profil/getLekar';
  }
  get izmeni_prof_lekara_url(): string {
    return this._api_url + '/lekar/izmeniProfil';
  }
  get posalji_Zahtev_GodOdsu_url(): string {
    return this._api_url + '/lekar/zahtevOdsGod';
  }

  get daj_pacijenta_url(): string {
    return this._api_url + '/pacijenti/{id}';
  }
}

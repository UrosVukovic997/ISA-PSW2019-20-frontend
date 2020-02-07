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

  get admin_kc_get_All_url(): string {
    return this._api_url + '/adminKC/getAll';
  }
  get admin_kc_profil_url(): string {
    return this._api_url + '/adminKC/getprofil/';
  }

  get admin_kc_changepassword_url(): string {
    return this._api_url + '/adminKC/changepassword';
  }

  get admin_kc_azuriraj_url(): string {
    return this._api_url + '/adminKC/azuriraj';
  }

  get obrisi_adminKC_url(): string {
    return this._api_url + '/adminKC/obrisi/';
  }

  get sestra_naziv_klinike_url(): string {
    return this._api_url + '/sestra/getNazivKlinike';
  }

  get get_all_patients_sestra_url(): string {
    return this._api_url + '/sestra/getAll';
  }
  get get_profil_data_sestra_url(): string {
    return this._api_url + '/sestra/getprofil';
  }
  get edit_profil_data_sestra_url(): string {
    return this._api_url + '/sestra/editprofil';
  }
  get edit_change_password_sestra_url(): string {
    return this._api_url + '/sestra/changepassword';
  }

  get get_karton_sestra_url(): string {
    return this._api_url + '/sestra/getKarton';
  }

  get get_recepte_sestra_url(): string {
    return this._api_url + '/sestra/recepti';
  }

  get overi_recept_sestra_url(): string {
    return this._api_url + '/sestra/overi';
  }

  get izmeni_karton_sestra_url(): string {
    return this._api_url + '/sestra/editKarton';
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

  get get_tip_pregleda_url(): string {
    return this._api_url + '/lekar/getTipPregleda';
  }
  get zakazi_pregled_url(): string {
    return this._api_url + '/lekar/zakaziPregled';
  }
  get obrisi_pacijentaById_url(): string {
    return this._api_url + '/lekar/obrisi';
  }
  get get_pacijentById_url(): string {
    return this._api_url + '/lekar/getPacijent';
  }
  get get_dijagPacijentaById_url(): string {
    return this._api_url + '/lekar/getDijagPacijent';
  }
  get daj_pacijenta_url(): string {
    return this._api_url + '/pacijenti/{id}';
  }

  get get_TipPregledaKlinike_url(): string {
    return this._api_url + '/pacijenti/getKlinPac';
  }

  get get_lekar_by_tip_url(): string {
    return this._api_url + '/pacijenti/getLekarOdTipa';
  }

  get get_vreme_by_lekarFTdatum_url(): string {
    return this._api_url + '/pacijenti/vremeLekaraFTDatum';
  }

  get get_ZakaziPregledPac_url(): string {
    return this._api_url + '/pacijenti/zakaziPregledPac';
  }
}

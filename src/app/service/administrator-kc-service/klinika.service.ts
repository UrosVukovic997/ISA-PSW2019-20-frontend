import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Klinika} from '../../shared/utilities/klinika';
import {Administrator} from '../../shared/utilities/administrator';
import {KlinikaPac} from '../../shared/utilities/KlinikaPac';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAll(): Observable<Klinika> {
    return this.http.get<Klinika>(this.configService.get_all_klinike_url);
  }

  getAllNames(): Observable<string> {
    return this.http.get<string>(this.configService.get_all_klinike_names_url);
  }

  dodaj(naziv, grad): Observable<any> {
    const k = new Klinika();
    k.id = 0;
    k.nazivKlinike = naziv;
    k.grad = grad;
    k.ocena = 0.0;
    return this.http.post<any>(this.configService.dodaj_kliniku_url, k);

  }
  getAllByKlinika(klinika): Observable<Administrator> {
    return this.http.get<Administrator>(this.configService.get_all_admin_url + '/' + klinika);
  }

  dodajAdmina(ime, prezime, email, username, lozinka, klinika): Observable<any> {
    const a = new Administrator();
    a.id = 0;
    a.ime = ime;
    a.prezime = prezime;
    a.email = email;
    a.username = username;
    a.lozinka = lozinka;
    a.klinika = klinika;
    return this.http.post<any>(this.configService.dodaj_admin_url, a);
  }
  obrisiKliniku(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_kliniku_url + id);
  }

  getKlinPac(): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_TipPregledaKlinike_url);
  }

  getSelectedKlinPac(klinika): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_selectedKlinPac_url + '/' + klinika);
  }

  getSveTP(): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_tip_pregleda_url);
  }

  getSearchLekarPac(spojeno): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_getSearchLekarPac_url + '/' + spojeno);
  }

  getOcenaKlinike(spojeno): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_getOcenaKlinike_url + '/' + spojeno);
  }

  getOceneLekara(spojeno): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_getOceneLekara_url + '/' + spojeno);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {Klinika} from '../../shared/utilities/klinika';
import {Administrator} from '../../shared/utilities/administrator';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAll(): Observable<Administrator> {
    return this.http.get<Administrator>(this.configService.get_all_admin_url);
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

  obrisiAdmina(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_admin_url + id);
  }

  obrisiAdminaKC(id): Observable<any> {
    return this.http.delete(this.configService.obrisi_adminKC_url + id);
  }



  getAllAdminKC(): Observable<any> {
    return this.http.get<any>(this.configService.admin_kc_get_All_url );
  }

  getAllBezKartona(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/adminKC/getBezKartona');
  }

  kreiraj( id ): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/adminKC/kreirajKarton/' + id, {});
  }
}

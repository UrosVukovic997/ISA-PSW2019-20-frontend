import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {Administrator} from '../../shared/utilities/administrator';
import {AdminKC} from '../../shared/utilities/admin-kc';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private configService: ConfigService) { }


  getProfil( username ): Observable<AdminKC> {
    return this.http.get<AdminKC>(this.configService.admin_kc_profil_url + username);
  }

  editProfil(admin): Observable<any> {
    return this.http.post(this.configService.admin_kc_azuriraj_url, admin);
  }

  updatePassword( password ): Observable<any> {
    return this.http.post(this.configService.admin_kc_changepassword_url, password);
  }
}

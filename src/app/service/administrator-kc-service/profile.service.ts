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

  getById( id ): Observable<AdminKC> {
    return this.http.get<AdminKC>(this.configService.admin_kc_url);
  }
}

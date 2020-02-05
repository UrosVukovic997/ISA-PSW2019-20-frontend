import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogovanjeServiceService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  login(user, roll) {
    if (roll === 'pacijent'  ) {
      return this.http.post(this.configService.loguj_pacijenta_url, user).pipe(map(User => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserUsername', User[1]);
        localStorage.setItem('currentUserEmail', User[0]);
        // this.currentUserSubject.next(User);
        console.log('Login success');
        return User;
      }));
    }
    if (roll === 'administratorKlinickog'  ) {
      return this.http.post(this.configService.loguj_adminkc_url, user).pipe(map(User => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserUsername', User[1]);
        localStorage.setItem('currentUserEmail', User[0]);        // this.currentUserSubject.next(User);
        console.log('Login success');
        return User;
      }));
    }
    if (roll === 'lekar'  ) {
      return this.http.post(this.configService.loguj_lekara_url, user).pipe(map(User => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserUsername', User[1]);
        localStorage.setItem('currentUserEmail', User[0]);        // this.currentUserSubject.next(User);
        console.log('Login success');
        return User;
      }));
    }
    if (roll === 'medicinskaSestra'  ) {
      return this.http.post(this.configService.loguj_mst_url, user).pipe(map(User => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserUsername', User[1]);
        localStorage.setItem('currentUserEmail', User[0]);        // this.currentUserSubject.next(User);
        console.log('Login success');
        return User;
      }));
    }
    if (roll === 'administratorKlinike'  ) {
      return this.http.post(this.configService.loguj_admin_url, user).pipe(map(User => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserUsername', User[1]);
        localStorage.setItem('currentUserEmail', User[0]);        // this.currentUserSubject.next(User);
        console.log('Login success');
        return User;
      }));
    }
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUserUsername');
    localStorage.removeItem('currentUserEmail');
    localStorage.removeItem('currentUserRole');
    this.currentUserSubject.next(null);
    this.router.navigate(['http://localhost:4200/logovanje']);
  }
}

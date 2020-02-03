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


  login(user) {
    return this.http.post(this.configService.loguj_pacijenta_url, user)
      .pipe(map(User => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserUsername', User[2]);
        localStorage.setItem('currentUser', JSON.stringify(User));
        this.currentUserSubject.next(User);
        console.log('Login success');
        return User;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserRole');
    this.currentUserSubject.next(null);
    this.router.navigate(['http://localhost:4200/logovanje']);
  }
}

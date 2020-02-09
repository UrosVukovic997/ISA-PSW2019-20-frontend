import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class PotvrdaService {

  constructor(private http: HttpClient, private configService: ConfigService) { }


  aktivirajNalog(id): Observable<any> {

    return this.http.post<any>(this.configService.aktiviraj_nalog_url + id, {})
      .pipe(
        catchError(this.errorHandl)
      );
  }

  prviPut(id): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/adminKC/prvoPrij/' + id);
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

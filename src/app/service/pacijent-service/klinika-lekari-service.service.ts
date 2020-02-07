import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';
import {Klinika} from '../../shared/utilities/klinika';
import {Lekar} from '../../shared/utilities/lekar';
import {KlinikaPac} from '../../shared/utilities/KlinikaPac';
import {PacijentEdit} from '../../shared/utilities/pacijent_edit';

@Injectable({
  providedIn: 'root'
})
export class KlinikaLekariServiceService {

  constructor(private http: HttpClient, private configService: ConfigService) { }
/*
  getTipPregleda(nazivKlinike): Observable<> {
    return this.http.get<>(this.configService.get_TipPregledaKlinike_url,nazivKlinike);
  }
*/
  getKlinPac(): Observable<KlinikaPac> {
    return this.http.get<KlinikaPac>(this.configService.get_TipPregledaKlinike_url);
  }

  getLekarPac( vrstaPregleda ): Observable<PacijentEdit> {
    return this.http.get<PacijentEdit>(this.configService.get_lekar_by_tip_url + '/' + vrstaPregleda);
  }

  getVreme( spojeno ): Observable<PacijentEdit> {
    return this.http.get<PacijentEdit>(this.configService.get_vreme_by_lekarFTdatum_url + '/' + spojeno);
  }
  getzakaziPregled( spojeno ): Observable<PacijentEdit> {
    return this.http.get<PacijentEdit>(this.configService.get_ZakaziPregledPac_url + '/' + spojeno);
  }
}


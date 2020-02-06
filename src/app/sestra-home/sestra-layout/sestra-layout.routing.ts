import {Routes} from '@angular/router';
import {KalendarComponent} from '../../kalendar/kalendar/kalendar.component';
import {PacijentListComponent} from '../pacijent-list/pacijent-list.component';
import {ProfilSestraComponent} from '../profil-sestra/profil-sestra.component';
import {WelcomePageComponent} from '../../administrator-kc/welcome-page/welcome-page.component';
import {KartonSestraComponent} from '../karton-sestra/karton-sestra.component';
import {OdmorOdsustvoSestraComponent} from '../odmor-odsustvo-sestra/odmor-odsustvo-sestra.component';


export const SestraLayoutRoutes: Routes = [
  { path: 'kalendar',      component: KalendarComponent },
  { path: 'pacijenti',      component: PacijentListComponent },
  { path: 'kartoni',      component: KartonSestraComponent },
  { path: 'profilSestra', component: ProfilSestraComponent},
  { path: 'odmor', component: OdmorOdsustvoSestraComponent},
  { path: '', component: WelcomePageComponent}
];

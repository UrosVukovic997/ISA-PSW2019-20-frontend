import {Routes} from '@angular/router';
import {KalendarComponent} from '../../kalendar/kalendar/kalendar.component';
import {PacijentListComponent} from '../pacijent-list/pacijent-list.component';
import { KartonComponent } from '../../karton/karton.component';
import {ProfilSestraComponent} from '../profil-sestra/profil-sestra.component';


export const SestraLayoutRoutes: Routes = [
  { path: 'kalendar',      component: KalendarComponent },
  { path: 'pacijenti',      component: PacijentListComponent },
  { path: 'kartoni',      component: KartonComponent },
  { path: 'profil', component: ProfilSestraComponent}
];

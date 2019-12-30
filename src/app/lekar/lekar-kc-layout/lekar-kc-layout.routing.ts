import { Routes } from '@angular/router';

import { ListaPacijenataComponent } from '../lista-pacijenata/lista-pacijenata.component';
import { OdsustvoOdmorComponent } from '../generisanje-odsustva-odmora/odsustvo-odmor.component';
import { LicniProfilLekaraComponent } from '../licni-profil/licni-profil.component';
import { RadniKalendarComponent } from '../radni-kalendar/radni-kalendar.component';
// import { ZakazivanjePregledaOperacijaComponent } from '../zakazivanje-pregleda-operacija/zakazivanje-pregleda-operacija.component';

export const LekarKcLayoutRoutes: Routes = [
  { path: 'listapacijenata',     component: ListaPacijenataComponent },
  { path: 'odsustvoodmori',     component: OdsustvoOdmorComponent },
  { path: 'licniprofil',     component: LicniProfilLekaraComponent },
  { path: 'radnikalendar',     component: RadniKalendarComponent },
 // { path: 'zakazivanjePregledaOperacija',     component: ZakazivanjePregledaOperacijaComponent }
];


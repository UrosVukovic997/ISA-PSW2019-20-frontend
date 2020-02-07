import { Routes } from '@angular/router';
import {ProfilComponent} from '../profil/profil.component';
import {KlinikePacijentaComponent} from '../klinike-pacijenta/klinike-pacijenta.component';

export const PacijentLayoutRutes: Routes = [
  {path: 'profil' , component: ProfilComponent},
  {path: 'klinike' , component: KlinikePacijentaComponent}
];

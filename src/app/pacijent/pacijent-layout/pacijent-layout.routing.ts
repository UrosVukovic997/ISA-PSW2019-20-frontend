import { Routes } from '@angular/router';
import {ProfilComponent} from '../profil/profil.component';
import {KlinikePacijentaComponent} from '../klinike-pacijenta/klinike-pacijenta.component';
import {PreglediComponent} from '../pregledi/pregledi.component';
import {KartonPacijentaComponent} from '../karton-pacijenta/karton-pacijenta.component';

export const PacijentLayoutRutes: Routes = [
  {path: 'profil' , component: ProfilComponent},
  {path: 'klinike' , component: KlinikePacijentaComponent},
  {path: 'pregledi/:jbo' , component: PreglediComponent},
  {path: 'karton/:jbo' , component: KartonPacijentaComponent}
];

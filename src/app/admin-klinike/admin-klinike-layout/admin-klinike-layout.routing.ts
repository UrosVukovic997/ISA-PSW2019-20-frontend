import { Routes } from '@angular/router';

import {PretrazujComponent} from '../pretrazuj/pretrazuj.component';
import {ProfilAdminaComponent} from '../profil-admina/profil-admina.component';
import {DefSlobTermineComponent} from '../def-slob-termine/def-slob-termine.component';
import {ProfilKlinikeComponent} from '../profil-klinike/profil-klinike.component';
import {PretragaSalaComponent} from '../pretraga-sala/pretraga-sala.component';
import {OdsustvoOdmoriComponent} from '../odsustvo-odmori/odsustvo-odmori.component';

export const AdminKlinikeLayoutRoutes: Routes = [
  { path: 'profilKlinike',      component: ProfilKlinikeComponent },
  { path: 'definisiSlobodneTer',   component: DefSlobTermineComponent },
  { path: 'poslovanje',     component: ProfilKlinikeComponent },
  { path: 'pretrazuj',     component: PretrazujComponent },
  { path: 'profilAdmina',          component: ProfilAdminaComponent },
  { path: 'pretragaSala',          component: PretragaSalaComponent },
  { path: 'odsustvoOdmori',          component: OdsustvoOdmoriComponent }
];


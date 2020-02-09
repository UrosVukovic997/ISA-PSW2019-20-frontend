import { Routes } from '@angular/router';

import { RegKlinikuComponent } from '../reg-kliniku/reg-kliniku.component';
import { RegAdminComponent } from '../reg-admin/reg-admin.component';
import { ListaRegZahtevaComponent } from '../lista-reg-zahteva/lista-reg-zahteva.component';
import { SifLekovaComponent } from '../sif-lekova/sif-lekova.component';
import { SigDijagnozaComponent } from '../sig-dijagnoza/sig-dijagnoza.component';
import { ProfileComponent } from '../profile/profile.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import {ForbiddenComponent} from '../forbidden/forbidden.component';
import {KreirajKartonComponent} from '../kreiraj-karton/kreiraj-karton.component';

export const AdminKcLayoutRoutes: Routes = [
  { path: 'registrujkliniku',      component: RegKlinikuComponent },
  { path: 'registrujadministratora',   component: RegAdminComponent },
  { path: 'zahtevizaregistraciju',     component: ListaRegZahtevaComponent },
  { path: 'sifarniklekova',     component: SifLekovaComponent },
  { path: 'sifarnikdijagnoza',          component: SigDijagnozaComponent },
  { path: '',          component: WelcomePageComponent },
  { path: 'profil',          component: ProfileComponent },
  { path: 'kreirajKarton',          component: KreirajKartonComponent },


];

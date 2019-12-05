import { Routes } from '@angular/router';

import { RegKlinikuComponent } from '../reg-kliniku/reg-kliniku.component';
import { RegAdminComponent } from '../reg-admin/reg-admin.component';
import { ListaRegZahtevaComponent } from '../lista-reg-zahteva/lista-reg-zahteva.component';
import { SifLekovaComponent } from '../sif-lekova/sif-lekova.component';
import { SigDijagnozaComponent } from '../sig-dijagnoza/sig-dijagnoza.component';

export const AdminKcLayoutRoutes: Routes = [
  { path: 'registrujkliniku',      component: RegKlinikuComponent },
  { path: 'registrujadministratora',   component: RegAdminComponent },
  { path: 'zahtevizaregistraciju',     component: ListaRegZahtevaComponent },
  { path: 'sifarniklekova',     component: SifLekovaComponent },
  { path: 'sifarnikdijagnoza',          component: SigDijagnozaComponent },

];

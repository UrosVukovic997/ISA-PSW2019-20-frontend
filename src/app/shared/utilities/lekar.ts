import {Klinika} from './klinika';

export class Lekar {
  id: number;
  ime: string;
  prezime: string;
  email: string;
  specijalnost: string;
  korIme: string;
  lozinka: string;
  klinika: Klinika;
  adresa: string;
  opis: string;
}

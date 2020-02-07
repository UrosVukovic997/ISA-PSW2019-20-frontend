export class Karton {
  id: number;
  broj: number;
  krvnaGrupa: string;
  dioptrija: string;
  dijagnoze: [];
  pregledi: [];
  jbo: number;
  ime: string;
  prezime: string;

  constructor(id: number, broj: number, krvnaGrupa: string, dioptrija: string, dijagnoze: [], pregledi: [],
              jbo: number, ime: string, prezime: string, ) {
    this.id = id;
    this.broj = broj;
    this.krvnaGrupa = krvnaGrupa;
    this.dioptrija = dioptrija;
    this.dijagnoze = dijagnoze;
    this.pregledi = pregledi;
    this.jbo = jbo;
    this.ime = ime;
    this.prezime = prezime;
  }
}



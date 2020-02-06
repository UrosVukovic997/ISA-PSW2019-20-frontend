export class Sestra {
  id: number;
  ime: string;
  prezime: string;
  email: string;
  adresa: string;
  username: string;
  klinika: string;

  constructor(  ime: string,
                prezime: string,
                email: string,
                username: string,
                adresa: string,

             ) {
    this.id = 0;
    this.ime = ime;
    this.prezime = prezime;
    this.email = email;
    this.adresa = adresa;
    this.username = username;
    this.klinika = '';
  }
}

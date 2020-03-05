import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KlinikaService} from '../../service/administrator-kc-service/klinika.service';
import {KlinikaLekariServiceService} from '../../service/pacijent-service/klinika-lekari-service.service';
import {Termin} from '../../shared/utilities/termin';
import {PacijentEdit} from '../../shared/utilities/pacijent_edit';
import {first} from 'rxjs/operators';
import {Klinika} from '../../shared/utilities/klinika';
import {KlinikaPac} from '../../shared/utilities/KlinikaPac';
import {KlinikaSearch} from '../../shared/utilities/KlinikaSearch';
import {ProfilPacijentaService} from '../../service/pacijent-service/profil-pacijenta.service';

@Component({
  selector: 'app-klinike-pacijenta',
  templateUrl: './klinike-pacijenta.component.html',
  styleUrls: ['./klinike-pacijenta.component.css']
})
export class KlinikePacijentaComponent implements OnInit {
  modalOptions: NgbModalOptions;
  odsodmor: any = [];

  constructor(private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder, private klinikaService: KlinikaService,
              private klinikaLekariService: KlinikaLekariServiceService,
              private pps: ProfilPacijentaService) {

  }

  pacijenti: any = [];
  lekari: any = [];
  klinike: any = [];
  vreme: any = [];
  closeResult: string;
  emailLekara: any = [];
  spojeno: any = [];
  spojeno1: any = [];
  spojeno2: any = [];
  spojeno3: any = [];
  spojeno4: any = [];
  spojeno5: any = [];
  pocetak: any = [];
  zakazan: any = [];
  item: any = [];
  tipoviPregleda: any = [];
  noveKlinike: any = [];
  noviLekari: any = [];
  najnovijiLekari: any = [];
  zaOpen1: any = [];
  zaOpen2: any = [];
  mojEvent: any = [];
  pacijent: any = [];

  nazivKlinike: string;
  adresaKlinike: string;
  imeLekara: string;
  prezimeLekara: string;
  specijalnostLekara: string;
  nazivLekara: string;
  prezLekara: string;
  noviNazivKlinike: string;
  noviEmailLekara: string;



  optionItems: any = [];
  dropDisabled: boolean;
  selected = '';
  loading = false;
  loading1 = false;
  loading2 = false;
  loading3 = false;
  loading6 = false;
  error: string;
  klinika: any = [];
  lekarSearch: any = [];

  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.ucitajKlinike();
    this.ucitajZahteve(); // pacijenti
  }

  ucitajKlinike() {
    this.klinikaService.getKlinPac()
      .subscribe((data: {}) => {
          this.klinike = data;
        }
      );
  }

  ucitajZahteve() {
    this.pps.getByUsername(localStorage.getItem('currentUserUsername').toString())
      .subscribe((data: {}) => {
          this.pacijent = data;
          // console.log(this.pacijent);
        }
      );
  }

  open(content, tpk) {
    this.zaOpen1 = content;
    this.zaOpen2 = tpk;
    this.fills(tpk);
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  fills(tpk) {
    this.optionItems = [];
    for (const item of tpk) {
      this.optionItems.push({id: item.naziv + ',' + item.cena, value: item.naziv  + ',' + item.cena, text: item.naziv  + ',' + item.cena});
      console.log(item);
      this.item = item.naziv + ',' + item.cena;
    }
  }

  onChange($event) {
    this.mojEvent = $event;
    console.log(this.selected);
    this.lekari = [];
    this.klinikaLekariService.getLekarPac(this.selected).subscribe((data: {}) => {
      this.lekari = data;
      console.log(this.lekari);
    });
  }

  open1(content, email) {
    this.emailLekara = email;
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onChange1(pocetak) {
    this.pocetak = pocetak;
    // console.log('radi');
    this.spojeno = pocetak + ',' + this.emailLekara;
    console.log(this.spojeno);
    this.klinikaLekariService.getVreme(this.spojeno).subscribe((data: {}) => {
      this.vreme = data;
      // console.log(this.vreme);
    });
  }

  fills1() {
    console.log('usao');
    for (const item of this.vreme) {
      this.optionItems.push({id: this.vreme.parsirano1, value: this.vreme.parsirano1, text: this.vreme.parsirano1});
      console.log(item);
    }
  }

  open3(sat) {
    this.spojeno1 = sat + ',' + this.pocetak + ',' + this.emailLekara + ',' + this.pacijent.username;
    console.log(this.spojeno1);
    this.klinikaLekariService.getzakaziPregled(this.spojeno1).subscribe((data: {}) => {
      this.zakazan = data;
      // console.log(this.vreme);
    });

    this.klinikaLekariService.getVreme(this.spojeno).subscribe((data: {}) => {
      this.vreme = data;
      // console.log(this.vreme);
    });
  }


  Search() {
    if (this.nazivKlinike !== '') {
      this.klinike = this.klinike.filter( res => {
        return res.nazivKlinike.toLocaleLowerCase().match(this.nazivKlinike.toLocaleLowerCase());
      });
    } else if (this.nazivKlinike === '') {
      this.ngOnInit();
    }
  }

  Search1() {
    if (this.adresaKlinike !== '') {
      this.klinike = this.klinike.filter( res => {
        return res.grad.toLocaleLowerCase().match(this.adresaKlinike.toLocaleLowerCase());
      });
    } else if (this.adresaKlinike === '') {
      this.ngOnInit();
    }
  }

  Search2() {
    if (this.imeLekara !== '') {
      this.lekari = this.lekari.filter( res => {
        return res.ime.toLocaleLowerCase().match(this.imeLekara.toLocaleLowerCase());
      });
    } else if (this.imeLekara === '') {
      this.klinikaLekariService.getLekarPac(this.selected).subscribe((data: {}) => {
        this.lekari = data;
        console.log(this.lekari);
      });
    }
  }

  Search3() {
    if (this.prezimeLekara !== '') {
      this.lekari = this.lekari.filter( res => {
        return res.prezime.toLocaleLowerCase().match(this.prezimeLekara.toLocaleLowerCase());
      });
    } else if (this.prezimeLekara === '') {
      this.klinikaLekariService.getLekarPac(this.selected).subscribe((data: {}) => {
        this.lekari = data;
        console.log(this.lekari);
      });
    }
  }

  Search4() {
    if (this.specijalnostLekara !== '') {
      this.lekari = this.lekari.filter( res => {
        return res.specijalnost.toLocaleLowerCase().match(this.specijalnostLekara.toLocaleLowerCase());
      });
    } else if (this.specijalnostLekara === '') {
      this.klinikaLekariService.getLekarPac(this.selected).subscribe((data: {}) => {
        this.lekari = data;
        console.log(this.lekari);
      });
    }
  }


  open22(content) {
    this.klinikaService.getSveTP().subscribe((data: {}) => {
        this.tipoviPregleda = data;
        this.fills3(this.tipoviPregleda);
      }
    );
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });

    this.registerForm = this.formBuilder.group({
      lokacija: ['', Validators.required],
      effectiveEndDate: ['']
    });
  }

    onSubmit() {
    this.submitted = true;
    console.log('ulaz');
    const lokacija = ((document.getElementById('lokacijaKlin') as HTMLInputElement).value);
    const datum = ((document.getElementById('effectiveEndDate') as HTMLInputElement).value);

    /*const klin = new KlinikaSearch();
    klin.grad = lokacija;
    klin.tipPregleda = this.selected;
    klin.datum = datum;*/

    this.spojeno2 = lokacija + ',' + this.selected + ',' + datum;
    console.log(this.spojeno2);
    this.klinikaService.getSelectedKlinPac(this.spojeno2).subscribe((data: {}) => {
        this.noveKlinike = data;
        console.log(data);
      }
    );
  }

  fills3(tpk) {
    this.optionItems = [];
    for (const item of tpk) {
        this.optionItems.push({id: item.naziv + ',' + item.cena, value: item.naziv + ',' + item.cena, text: item.naziv + ',' + item.cena});
        console.log(item);
        this.item = item.naziv + ',' + item.cena;
      }
    }

  open33(content, nazivKlinike) {
    this.spojeno3 = this.spojeno2 + ',' + nazivKlinike;
    console.log(this.spojeno3);
    this.klinikaService.getSearchLekarPac(this.spojeno3).subscribe((data: {}) => {
        this.noviLekari = data;
        console.log(data);
      }
    );

    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  Search33() {
    if (this.nazivLekara !== '') {
      this.noviLekari = this.noviLekari.filter( res => {
        return res.ime.toLocaleLowerCase().match(this.nazivLekara.toLocaleLowerCase());
      });
    } else if (this.nazivLekara === '') {
      this.klinikaService.getSearchLekarPac(this.spojeno3).subscribe((data: {}) => {
          this.noviLekari = data;
          console.log(data);
        }
      );
    }
  }

  Search34() {
    if (this.prezLekara !== '') {
      this.noviLekari = this.noviLekari.filter( res => {
        return res.prezime.toLocaleLowerCase().match(this.prezLekara.toLocaleLowerCase());
      });
    } else if (this.prezLekara === '') {
      this.klinikaService.getSearchLekarPac(this.spojeno3).subscribe((data: {}) => {
          this.noviLekari = data;
          console.log(data);
        }
      );
    }
  }

  open44(content) {
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  open443() {
    console.log('ulaz 443');
    const ime = ((document.getElementById('imeLekara') as HTMLInputElement).value);
    console.log(ime);
    const prezime = ((document.getElementById('przLekara') as HTMLInputElement).value);
    console.log(prezime);
    const ocena = ((document.getElementById('poLekara') as HTMLInputElement).value);
    console.log(ocena);
    const o = Number(ocena);

    this.najnovijiLekari = [];
    for (const nl of this.noviLekari) {
      if (nl.ime === ime && nl.prezime === prezime && nl.ocena === o ) {
        this.najnovijiLekari.push(nl);
      } else {
        if (nl.ime === ime && nl.prezime === prezime) {
          this.najnovijiLekari.push(nl);
        } else {
          if (nl.ime === ime && nl.ocena === o ) {
            this.najnovijiLekari.push(nl);
          } else {
            if (nl.prezime === prezime && nl.ocena === o ) {
              this.najnovijiLekari.push(nl);
            } else {
              if (nl.ime === ime) {
                this.najnovijiLekari.push(nl);
              } else {
                if (nl.prezime === prezime) {
                  this.najnovijiLekari.push(nl);
                } else {
                  if (nl.ocena === o ) {
                    this.najnovijiLekari.push(nl);
                  } else {
                    this.najnovijiLekari.push();
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log(this.najnovijiLekari);
  }

  open444(content, nazivKlinike) {
    this.noviNazivKlinike = nazivKlinike;
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  open445() {
    const ocena = ((document.getElementById('pacijentovaOcena') as HTMLInputElement).value);
    this.spojeno4 = ocena + ',' + this.noviNazivKlinike   + ',' + this.pacijent.username;
    console.log(this.spojeno4);
    this.klinikaService.getOcenaKlinike(this.spojeno4).subscribe((data: {}) => {
        // this.noviLekari = data;
        console.log(data);
        this.ngOnInit();
      }
    );

  }

  open144(content, emailLekara) {
    this.noviEmailLekara = emailLekara;
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  open145() {
    const ocena = ((document.getElementById('pacijentovaOcenaLekara') as HTMLInputElement).value);
    this.spojeno5 = ocena + ',' + this.noviEmailLekara;
    console.log(this.spojeno5);
    this.klinikaService.getOceneLekara(this.spojeno5).subscribe((data: {}) => {
        // this.noviLekari = data;
        console.log(data);
        this.onChange(this.mojEvent);
        // this.ngOnInit();
      }
    );

  }

}

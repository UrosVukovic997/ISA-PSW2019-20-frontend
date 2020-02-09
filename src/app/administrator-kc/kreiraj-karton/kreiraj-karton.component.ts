import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/administrator-kc-service/admin.service';

@Component({
  selector: 'app-kreiraj-karton',
  templateUrl: './kreiraj-karton.component.html',
  styleUrls: ['./kreiraj-karton.component.css']
})
export class KreirajKartonComponent implements OnInit {

  pacijenti: any = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.ucitaj();
  }

  ucitaj() {
    this.adminService.getAllBezKartona().subscribe(data => {
      this.pacijenti = data;
    });
  }

  kreiraj(id) {
    console.log(id);
    this.adminService.kreiraj(id).subscribe(data => {
      this.ngOnInit();
    });
  }

}

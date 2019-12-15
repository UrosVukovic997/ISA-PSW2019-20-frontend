import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PotvrdaService} from '../../service/administrator-kc-service/potvrda.service';

@Component({
  selector: 'app-potvrda',
  templateUrl: './potvrda.component.html',
  styleUrls: ['./potvrda.component.css']
})
export class PotvrdaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private potvrdaService: PotvrdaService) { }

  show = true;

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log('Id korisnika: ' + id);
    this.potvrdaService.aktivirajNalog(id).subscribe( data => {
      // this.router.navigate(['/logovanje']);
      this.show = false;
    }, error => {
      this.show = true;
      }
    );
  }


}

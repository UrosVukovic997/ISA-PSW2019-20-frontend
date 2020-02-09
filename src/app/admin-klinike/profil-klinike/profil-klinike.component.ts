import {Component, Input, OnInit} from '@angular/core';
import {
  ModalDismissReasons,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SifrarnikService} from '../../service/administrator-kc-service/sifrarnik.service';
import {Router} from '@angular/router';
import {AdminService} from '../../service/administrator-kc-service/admin.service';
import {KlinikaService} from '../../service/administrator-kc-service/klinika.service';
import {first} from 'rxjs/operators';
import {ProfilKlinikeService} from '../../service/admin-klinike-service/profil-klinike.service';

@Component({
  selector: 'app-prof-klin',
  templateUrl: './profil-klinike.component.html',
  styleUrls: ['./profil-klinike.component.css']
})
export class ProfilKlinikeComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  adminForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;

  constructor(private profilKlinikeService: ProfilKlinikeService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  ngOnInit() {
  }
}

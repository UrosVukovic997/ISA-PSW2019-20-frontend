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
import {OdsustvoOdmorService} from '../../service/lekar-kc-service/odsustvoOdmor.service';
import {Router} from '@angular/router';
import {Dijagnoza} from '../../shared/utilities/dijagnoza';
import {Lek} from '../../shared/utilities/lek';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-sif-lekova',
  templateUrl: './odsustvo-odmor.component.html',
  styleUrls: ['./odsustvo-odmor.component.css']
})
export class OdsustvoOdmorComponent implements OnInit {
  modalOptions: NgbModalOptions;
  ngbDropdownToggle: NgbDropdownToggle;
  ngbDropdownMenu: NgbDropdownMenu;
  ngbDropdown: NgbDropdown;
  ngbDropdownItem: NgbDropdownItem;
  closeResult: string;
  lekForm: FormGroup;
  @Input() myModalTitle;
  @Input() myModalContent;
  loading = false;
  submitted = false;
  nazivL = '';
  opisL = '';
  mode = 0;
  constructor(private odsustvoOdmorService: OdsustvoOdmorService , private router: Router, private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit(): void {
  }
}

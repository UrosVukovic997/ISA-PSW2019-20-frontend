import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminKlinikeComponent } from './navbar.component';

describe('NavbarAdminKlinikeComponent', () => {
  let component: NavbarAdminKlinikeComponent;
  let fixture: ComponentFixture<NavbarAdminKlinikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAdminKlinikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminKlinikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicniProfilLekaraComponent } from './licni-profil.component';

describe('LicniProfilLekaraComponent', () => {
  let component: LicniProfilLekaraComponent;
  let fixture: ComponentFixture<LicniProfilLekaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicniProfilLekaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicniProfilLekaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

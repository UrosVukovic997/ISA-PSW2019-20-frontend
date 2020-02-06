import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSestraComponent } from './profil-sestra.component';

describe('ProfilSestraComponent', () => {
  let component: ProfilSestraComponent;
  let fixture: ComponentFixture<ProfilSestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilSestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

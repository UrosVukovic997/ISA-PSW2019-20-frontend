import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdmorOdsustvoSestraComponent } from './odmor-odsustvo-sestra.component';

describe('OdmorOdsustvoSestraComponent', () => {
  let component: OdmorOdsustvoSestraComponent;
  let fixture: ComponentFixture<OdmorOdsustvoSestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdmorOdsustvoSestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdmorOdsustvoSestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

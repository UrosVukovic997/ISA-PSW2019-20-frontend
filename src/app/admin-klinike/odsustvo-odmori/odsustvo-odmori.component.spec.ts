import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsustvoOdmoriComponent } from './odsustvo-odmori.component';

describe('OdsustvoOdmoriComponent', () => {
  let component: OdsustvoOdmoriComponent;
  let fixture: ComponentFixture<OdsustvoOdmoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdsustvoOdmoriComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdsustvoOdmoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

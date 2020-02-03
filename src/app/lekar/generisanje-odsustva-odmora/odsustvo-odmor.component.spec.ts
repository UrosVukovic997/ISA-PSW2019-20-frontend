import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsustvoOdmorComponent } from './odsustvo-odmor.component';

describe('SifLekovaComponent', () => {
  let component: OdsustvoOdmorComponent;
  let fixture: ComponentFixture<OdsustvoOdmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdsustvoOdmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdsustvoOdmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

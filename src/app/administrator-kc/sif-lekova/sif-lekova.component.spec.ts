import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SifLekovaComponent } from './sif-lekova.component';

describe('SifLekovaComponent', () => {
  let component: SifLekovaComponent;
  let fixture: ComponentFixture<SifLekovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SifLekovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SifLekovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

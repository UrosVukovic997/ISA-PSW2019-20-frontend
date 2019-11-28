import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigDijagnozaComponent } from './sig-dijagnoza.component';

describe('SigDijagnozaComponent', () => {
  let component: SigDijagnozaComponent;
  let fixture: ComponentFixture<SigDijagnozaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigDijagnozaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigDijagnozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

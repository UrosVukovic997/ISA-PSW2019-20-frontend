import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretrazujComponent } from './pretrazuj.component';

describe('PretrazujComponent', () => {
  let component: PretrazujComponent;
  let fixture: ComponentFixture<PretrazujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretrazujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretrazujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

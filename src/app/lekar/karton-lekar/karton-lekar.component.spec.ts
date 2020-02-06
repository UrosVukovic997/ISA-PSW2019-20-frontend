import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartonLekarComponent } from './karton-lekar.component';

describe('KartonLekarComponent', () => {
  let component: KartonLekarComponent;
  let fixture: ComponentFixture<KartonLekarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartonLekarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartonLekarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

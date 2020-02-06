import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartonSestraComponent } from './karton-sestra.component';

describe('KartonSestraComponent', () => {
  let component: KartonSestraComponent;
  let fixture: ComponentFixture<KartonSestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartonSestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartonSestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

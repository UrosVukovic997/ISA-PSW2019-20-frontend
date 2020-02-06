import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacNavbarComponent } from './pac-navbar.component';

describe('PacNavbarComponent', () => {
  let component: PacNavbarComponent;
  let fixture: ComponentFixture<PacNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

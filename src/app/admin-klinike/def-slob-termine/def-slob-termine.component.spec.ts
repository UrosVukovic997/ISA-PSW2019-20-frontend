import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefSlobTermineComponent } from './def-slob-termine.component';

describe('RegAdminComponent', () => {
  let component: DefSlobTermineComponent;
  let fixture: ComponentFixture<DefSlobTermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefSlobTermineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefSlobTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarKcLayoutComponent } from './lekar-kc-layout.component';

describe('LekarKcLayoutComponent', () => {
  let component: LekarKcLayoutComponent;
  let fixture: ComponentFixture<LekarKcLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekarKcLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarKcLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

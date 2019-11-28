import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKcLayoutComponent } from './admin-kc-layout.component';

describe('AdminKcLayoutComponent', () => {
  let component: AdminKcLayoutComponent;
  let fixture: ComponentFixture<AdminKcLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKcLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKcLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

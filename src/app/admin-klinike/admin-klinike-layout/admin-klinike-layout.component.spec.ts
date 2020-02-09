import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKlinikeLayoutComponent } from './admin-klinike-layout.component';

describe('AdminKlinikeLayoutComponent', () => {
  let component: AdminKlinikeLayoutComponent;
  let fixture: ComponentFixture<AdminKlinikeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKlinikeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKlinikeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

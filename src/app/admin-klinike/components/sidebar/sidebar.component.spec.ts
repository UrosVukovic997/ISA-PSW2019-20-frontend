import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdminKlinikeComponent } from './sidebar.component';

describe('SidebarAdminKlinikeComponent', () => {
  let component: SidebarAdminKlinikeComponent;
  let fixture: ComponentFixture<SidebarAdminKlinikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAdminKlinikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdminKlinikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

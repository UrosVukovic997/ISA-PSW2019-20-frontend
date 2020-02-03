import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSestraComponent } from './sidebar-sestra.component';

describe('SidebarSestraComponent', () => {
  let component: SidebarSestraComponent;
  let fixture: ComponentFixture<SidebarSestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

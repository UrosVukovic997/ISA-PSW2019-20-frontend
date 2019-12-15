import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLekarComponent } from './sidebar.component';

describe('SidebarLekarComponent', () => {
  let component: SidebarLekarComponent;
  let fixture: ComponentFixture<SidebarLekarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLekarComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLekarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

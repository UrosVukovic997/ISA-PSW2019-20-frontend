import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacSidebarComponent } from './pac-sidebar.component';

describe('PacSidebarComponent', () => {
  let component: PacSidebarComponent;
  let fixture: ComponentFixture<PacSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

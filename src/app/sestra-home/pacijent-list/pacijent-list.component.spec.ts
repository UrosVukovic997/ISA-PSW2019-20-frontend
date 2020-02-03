import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentListComponent } from './pacijent-list.component';

describe('PacijentListComponent', () => {
  let component: PacijentListComponent;
  let fixture: ComponentFixture<PacijentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacijentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacijentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

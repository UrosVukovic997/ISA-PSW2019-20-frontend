import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentLayoutComponent } from './pacijent-layout.component';

describe('PacijentLayoutComponent', () => {
  let component: PacijentLayoutComponent;
  let fixture: ComponentFixture<PacijentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacijentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacijentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

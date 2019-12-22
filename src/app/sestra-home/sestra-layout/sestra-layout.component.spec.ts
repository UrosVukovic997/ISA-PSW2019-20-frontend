import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SestraLayoutComponent } from './sestra-layout.component';

describe('SestraLayoutComponent', () => {
  let component: SestraLayoutComponent;
  let fixture: ComponentFixture<SestraLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SestraLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SestraLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegKlinikuComponent } from './reg-kliniku.component';

describe('RegKlinikuComponent', () => {
  let component: RegKlinikuComponent;
  let fixture: ComponentFixture<RegKlinikuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegKlinikuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegKlinikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

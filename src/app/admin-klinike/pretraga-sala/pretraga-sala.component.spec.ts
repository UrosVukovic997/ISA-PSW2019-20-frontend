import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaSalaComponent } from './pretraga-sala.component';

describe('PretragaSalaComponent', () => {
  let component: PretragaSalaComponent;
  let fixture: ComponentFixture<PretragaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaSalaComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

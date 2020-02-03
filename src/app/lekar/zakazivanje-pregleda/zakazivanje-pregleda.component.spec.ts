import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazivanjePregledaComponent } from './zakazivanje-pregleda.component';

describe('ZakazivanjePregledaComponent', () => {
  let component: ZakazivanjePregledaComponent;
  let fixture: ComponentFixture<ZakazivanjePregledaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakazivanjePregledaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakazivanjePregledaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

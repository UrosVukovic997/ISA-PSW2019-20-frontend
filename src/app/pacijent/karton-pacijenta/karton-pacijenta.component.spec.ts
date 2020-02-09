import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartonPacijentaComponent } from './karton-pacijenta.component';

describe('KartonPacijentaComponent', () => {
  let component: KartonPacijentaComponent;
  let fixture: ComponentFixture<KartonPacijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartonPacijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartonPacijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

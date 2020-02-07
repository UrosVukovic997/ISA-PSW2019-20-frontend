import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlinikePacijentaComponent } from './klinike-pacijenta.component';

describe('KlinikePacijentaComponent', () => {
  let component: KlinikePacijentaComponent;
  let fixture: ComponentFixture<KlinikePacijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlinikePacijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlinikePacijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

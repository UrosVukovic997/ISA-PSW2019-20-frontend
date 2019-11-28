import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegZahtevaComponent } from './lista-reg-zahteva.component';

describe('ListaRegZahtevaComponent', () => {
  let component: ListaRegZahtevaComponent;
  let fixture: ComponentFixture<ListaRegZahtevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRegZahtevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRegZahtevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

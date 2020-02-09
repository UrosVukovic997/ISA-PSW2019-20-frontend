import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajKartonComponent } from './kreiraj-karton.component';

describe('KreirajKartonComponent', () => {
  let component: KreirajKartonComponent;
  let fixture: ComponentFixture<KreirajKartonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreirajKartonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajKartonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

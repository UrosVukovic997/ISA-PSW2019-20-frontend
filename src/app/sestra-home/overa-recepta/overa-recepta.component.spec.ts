import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OveraReceptaComponent } from './overa-recepta.component';

describe('OveraReceptaComponent', () => {
  let component: OveraReceptaComponent;
  let fixture: ComponentFixture<OveraReceptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OveraReceptaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OveraReceptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

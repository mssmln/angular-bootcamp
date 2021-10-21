import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsanteComponent } from './pulsante.component';

describe('PulsanteComponent', () => {
  let component: PulsanteComponent;
  let fixture: ComponentFixture<PulsanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

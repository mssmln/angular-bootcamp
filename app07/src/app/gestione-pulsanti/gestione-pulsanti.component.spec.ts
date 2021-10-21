import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionePulsantiComponent } from './gestione-pulsanti.component';

describe('GestionePulsantiComponent', () => {
  let component: GestionePulsantiComponent;
  let fixture: ComponentFixture<GestionePulsantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionePulsantiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionePulsantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

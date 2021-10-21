import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrologiComponent } from './gestione-orologi.component';

describe('GestioneOrologiComponent', () => {
  let component: GestioneOrologiComponent;
  let fixture: ComponentFixture<GestioneOrologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneOrologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

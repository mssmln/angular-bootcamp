import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneNomiComponent } from './gestione-nomi.component';

describe('GestioneNomiComponent', () => {
  let component: GestioneNomiComponent;
  let fixture: ComponentFixture<GestioneNomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneNomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneNomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

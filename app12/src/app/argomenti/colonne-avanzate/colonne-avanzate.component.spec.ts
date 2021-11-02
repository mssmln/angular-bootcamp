import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonneAvanzateComponent } from './colonne-avanzate.component';

describe('ColonneAvanzateComponent', () => {
  let component: ColonneAvanzateComponent;
  let fixture: ComponentFixture<ColonneAvanzateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonneAvanzateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonneAvanzateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempiPipesComponent } from './esempi-pipes.component';

describe('EsempiPipesComponent', () => {
  let component: EsempiPipesComponent;
  let fixture: ComponentFixture<EsempiPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsempiPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsempiPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

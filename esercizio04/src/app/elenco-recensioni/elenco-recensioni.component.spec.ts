import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoRecensioniComponent } from './elenco-recensioni.component';

describe('ElencoRecensioniComponent', () => {
  let component: ElencoRecensioniComponent;
  let fixture: ComponentFixture<ElencoRecensioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoRecensioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

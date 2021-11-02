import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllineamentoComponent } from './allineamento.component';

describe('AllineamentoComponent', () => {
  let component: AllineamentoComponent;
  let fixture: ComponentFixture<AllineamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllineamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllineamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

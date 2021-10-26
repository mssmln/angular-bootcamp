import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoAtletiComponent } from './elenco-atleti.component';

describe('ElencoAtletiComponent', () => {
  let component: ElencoAtletiComponent;
  let fixture: ComponentFixture<ElencoAtletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoAtletiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoAtletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

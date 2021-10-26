import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScuolaComponent } from './scuola.component';

describe('ScuolaComponent', () => {
  let component: ScuolaComponent;
  let fixture: ComponentFixture<ScuolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScuolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScuolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

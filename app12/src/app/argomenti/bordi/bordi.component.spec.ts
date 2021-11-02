import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordiComponent } from './bordi.component';

describe('BordiComponent', () => {
  let component: BordiComponent;
  let fixture: ComponentFixture<BordiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

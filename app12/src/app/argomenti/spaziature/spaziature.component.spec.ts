import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaziatureComponent } from './spaziature.component';

describe('SpaziatureComponent', () => {
  let component: SpaziatureComponent;
  let fixture: ComponentFixture<SpaziatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaziatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaziatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

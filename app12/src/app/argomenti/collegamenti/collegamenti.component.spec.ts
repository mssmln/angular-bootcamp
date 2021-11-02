import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegamentiComponent } from './collegamenti.component';

describe('CollegamentiComponent', () => {
  let component: CollegamentiComponent;
  let fixture: ComponentFixture<CollegamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegamentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

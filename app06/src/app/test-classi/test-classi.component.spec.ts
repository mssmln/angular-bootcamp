import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClassiComponent } from './test-classi.component';

describe('TestClassiComponent', () => {
  let component: TestClassiComponent;
  let fixture: ComponentFixture<TestClassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestClassiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInterfacceComponent } from './test-interfacce.component';

describe('TestInterfacceComponent', () => {
  let component: TestInterfacceComponent;
  let fixture: ComponentFixture<TestInterfacceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInterfacceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInterfacceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

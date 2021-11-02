import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5FormsComponent } from './html5-forms.component';

describe('Html5FormsComponent', () => {
  let component: Html5FormsComponent;
  let fixture: ComponentFixture<Html5FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5FormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

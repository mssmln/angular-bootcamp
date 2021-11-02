import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposizioneComponent } from './disposizione.component';

describe('DisposizioneComponent', () => {
  let component: DisposizioneComponent;
  let fixture: ComponentFixture<DisposizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisposizioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

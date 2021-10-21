import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterazioneComponent } from './iterazione.component';

describe('IterazioneComponent', () => {
  let component: IterazioneComponent;
  let fixture: ComponentFixture<IterazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceRecorderComponent } from './presence-recorder.component';

describe('PresenceRecorderComponent', () => {
  let component: PresenceRecorderComponent;
  let fixture: ComponentFixture<PresenceRecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceRecorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

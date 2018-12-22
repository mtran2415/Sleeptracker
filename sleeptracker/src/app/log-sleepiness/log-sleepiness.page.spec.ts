import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSleepinessPage } from './log-sleepiness.page';

describe('LogSleepinessPage', () => {
  let component: LogSleepinessPage;
  let fixture: ComponentFixture<LogSleepinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSleepinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

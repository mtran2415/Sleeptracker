import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoggedDataPage } from './view-logged-data.page';

describe('ViewLoggedDataPage', () => {
  let component: ViewLoggedDataPage;
  let fixture: ComponentFixture<ViewLoggedDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoggedDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoggedDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

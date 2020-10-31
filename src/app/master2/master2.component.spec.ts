/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Master2Component } from './master2.component';

describe('Master2Component', () => {
  let component: Master2Component;
  let fixture: ComponentFixture<Master2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Master2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Master2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

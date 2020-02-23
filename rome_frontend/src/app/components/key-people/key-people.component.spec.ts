import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { KeyPeopleComponent } from './key-people.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('KeyPeopleComponent', () => {
  let component: KeyPeopleComponent;
  let fixture: ComponentFixture<KeyPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPeopleComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

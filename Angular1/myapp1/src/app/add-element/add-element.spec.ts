import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElement } from './add-element';

describe('AddElement', () => {
  let component: AddElement;
  let fixture: ComponentFixture<AddElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddElement],
    }).compileComponents();

    fixture = TestBed.createComponent(AddElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisruptionComponent } from './add-disruption.component';

describe('AddDisruptionComponent', () => {
  let component: AddDisruptionComponent;
  let fixture: ComponentFixture<AddDisruptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisruptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisruptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

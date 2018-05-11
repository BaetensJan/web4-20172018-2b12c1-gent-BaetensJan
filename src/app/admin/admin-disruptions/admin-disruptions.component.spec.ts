import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisruptionsComponent } from './admin-disruptions.component';

describe('AdminDisruptionsComponent', () => {
  let component: AdminDisruptionsComponent;
  let fixture: ComponentFixture<AdminDisruptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisruptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisruptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

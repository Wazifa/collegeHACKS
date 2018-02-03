import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoommateComponent } from './add-roommate.component';

describe('AddRoommateComponent', () => {
  let component: AddRoommateComponent;
  let fixture: ComponentFixture<AddRoommateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoommateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoommateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

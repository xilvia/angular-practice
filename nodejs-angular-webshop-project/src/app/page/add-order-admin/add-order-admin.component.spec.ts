import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderAdminComponent } from './add-order-admin.component';

describe('AddOrderAdminComponent', () => {
  let component: AddOrderAdminComponent;
  let fixture: ComponentFixture<AddOrderAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

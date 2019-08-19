import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdminEditComponent } from './order-admin-edit.component';

describe('OrderAdminEditComponent', () => {
  let component: OrderAdminEditComponent;
  let fixture: ComponentFixture<OrderAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

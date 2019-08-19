import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminEditComponent } from './product-admin-edit.component';

describe('ProductAdminEditComponent', () => {
  let component: ProductAdminEditComponent;
  let fixture: ComponentFixture<ProductAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

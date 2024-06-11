import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersByCustomerComponent } from './orders-by-customer.component';

describe('OrdersByCustomerComponent', () => {
  let component: OrdersByCustomerComponent;
  let fixture: ComponentFixture<OrdersByCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersByCustomerComponent]
    });
    fixture = TestBed.createComponent(OrdersByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

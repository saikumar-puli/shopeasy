import { TestBed } from '@angular/core/testing';
import { CartPage } from './cart';

describe('CartPage', () => {
  let component: CartPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(CartPage).componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
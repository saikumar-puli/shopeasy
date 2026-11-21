
import { Component } from '@angular/core';
import { Cart } from '../../services/cart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

  fullName = '';
  email = '';
  phone = '';
  address = '';
  paymentMethod = '';

  orderPlaced = false;

  constructor(private cartService: Cart) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  placeOrder() {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    this.orderPlaced = true;
    alert('Your order has been placed successfully! 🎉');
  }
}


import { Component } from '@angular/core';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartPage {

  constructor(private cartService: Cart) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  removeProduct(product: any) {
    this.cartService.removeFromCart(product);
  }

  increaseQuantity(product: any) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
  }
}

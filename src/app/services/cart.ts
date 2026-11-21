

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cartItems: any[] = [];

  addToCart(product: any) {
    const existingProduct = this.cartItems.find(
      item => item.name === product.name
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1
      });
    }
  }

  removeFromCart(product: any) {
    const index = this.cartItems.indexOf(product);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(product: any) {
    product.quantity++;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.removeFromCart(product);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
  }
}

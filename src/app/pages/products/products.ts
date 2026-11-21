
import { Component } from '@angular/core';
import { Cart } from '../../services/cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  searchText: string = '';

  constructor(
    private cartService: Cart,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe(params => {
      this.searchText = params.get('search')?.toLowerCase() || '';
    });
  }

  addProduct(product: any) {
    this.cartService.addToCart(product);
    alert(product.name + ' added to cart!');
  }
}

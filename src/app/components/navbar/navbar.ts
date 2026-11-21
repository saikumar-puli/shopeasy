
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  searchText: string = '';

  constructor(private router: Router) {}

  searchProducts() {
    if (this.searchText.trim()) {
      this.router.navigate(['/products'], {
        queryParams: { search: this.searchText }
      });
    }
  }

  clearSearch() {
    this.searchText = '';
    this.router.navigate(['/products']);
  }
}

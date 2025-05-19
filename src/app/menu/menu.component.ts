import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
// import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products = [
    { productNo: 1, description: 'Iced Black Forest', price: 39, image: 'assets/images/Iced Black Forest_.jpg', category: 'Cold' },
    { productNo: 2, description: 'Iced Caramel Macchiato', price: 39, image: 'assets/images/Iced Caramel Macchiato_.jpg', category: 'Cold' },
    { productNo: 3, description: 'Iced Don Darko', price: 39, image: 'assets/images/Iced Don Darko.jpg', category: 'Cold' },
    { productNo: 4, description: 'Iced Don Machatos', price: 39, image: 'assets/images/Iced Don Machatos.jpg', category: 'Cold' },
    { productNo: 5, description: 'Iced Donya Berry', price: 39, image: 'assets/images/Iced Donya Berry.jpg', category: 'Cold' },
    { productNo: 6, description: 'Iced Matcha Berry', price: 39, image: 'assets/images/Iced Matcha Berry_.jpg', category: 'Cold' },
    { productNo: 7, description: 'Iced Oreo Coffee', price: 39, image: 'assets/images/Iced Oreo Coffee_.jpg', category: 'Cold' },
    { productNo: 8, description: 'Pure Ube', price: 39, image: 'assets/images/Pure Ube.jpg', category: 'Cold' },
    { productNo: 9, description: 'Spanish Latte', price: 39, image: 'assets/images/Spanish Latte.jpg', category: 'Hot' },
    { productNo: 10, description: 'Ube With Coffee', price: 59, image: 'assets/images/Ube With Coffee_.jpg', category: 'Cold' },
    { productNo: 11, description: 'Ube With Matcha', price: 59, image: 'assets/images/Ube With Matcha.jpg', category: 'Cold' },
    { productNo: 12, description: 'Hot Caramel', price: 39, image: 'assets/images/Hot Caramel.jpg', category: 'Hot' },
    { productNo: 13, description: 'Hot Don Barako', price: 39, image: 'assets/images/Hot Don Barako.jpg', category: 'Hot' },
    { productNo: 14, description: 'Hot Don Darko', price: 39, image: 'assets/images/Hot Don Dark9.jpg', category: 'Hot' },
    { productNo: 15, description: 'Frozen Yogurt (Sauce& Toppings)', price: 99, image: 'assets/images/Frozen Yogurt (Sauce& Toppings).jpg', category: 'Yogurt' },
    { productNo: 16, description: 'Frozen Yogurt (Toppings)', price: 99, image: 'assets/images/Frozen Yogurt (Toppings).jpg', category: 'Yogurt' },
    { productNo: 17, description: 'Frozen Yogurt( Sauce)', price: 59, image: 'assets/images/Frozen Yogurt( Sauce).jpg', category: 'Yogurt' },
    { productNo: 18, description: 'Frozen Yogurt (Plain)', price: 39, image: 'assets/images/Frozen Yougurt(Plain).jpg', category: 'Yogurt' },
  ];

  searchQuery = '';
  filteredProducts = [...this.products];
  selectedCategory = '';

  activeCategory: string = ''; // Track the active category

  // Method to set the active category
  filterByColor(category: string): void {
    this.activeCategory = category;
  }

  user: any = null; // Store full user object
userName: string = '';
address: string = '';
email: string = '';
mobileNumber: string = '';

  constructor(
    private router: Router,
    private cartService: CartService
  ) {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn !== 'true') {
      this.router.navigate(['/login']);
    }
  
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.userName = this.user.fullName || '';
      this.address = this.user.deliveryAddress || '';
      this.email = this.user.email || '';
      this.mobileNumber = this.user.mobileNumber || '';
      // ⚠️ Avoid using/storing passwords in the frontend beyond initial signup/login!
    }
  }
  
  
  filterProducts(): void {
    const query = this.searchQuery.trim().toLowerCase();
    const categoryFilter = this.selectedCategory;

    this.filteredProducts = this.products.filter(product => {
      const matchesQuery = !query || product.description.toLowerCase().includes(query);
      const matchesCategory = !categoryFilter || product.category === categoryFilter;
      return matchesQuery && matchesCategory;
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  addToBag(product: any): void {
    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Check if product already exists in cart
    const existingProduct = cart.find((item: any) => item.productNo === product.productNo);
  
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Optional: Notify user
    alert(`"${product.description}" has been added to your bag.`);
  }
  
  onBag(): void {
    this.router.navigate(['/bag']);
  }

  onProfile(): void {
    this.router.navigate(['/profile']);
  }

  onOrders(): void {
    this.router.navigate(['/orders']);
  }

  onMenu(): void {
    this.router.navigate(['/menu']);
  }

  onNotif(): void {
    this.router.navigate(['/notification']);
  }
}

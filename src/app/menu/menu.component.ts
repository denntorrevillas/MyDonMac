import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products = [
    { productNo: 1, description: 'Iced Black Forest', price: 39, image: '/assets/images/Iced Black Forest_.jpg' },
    { productNo: 2, description: 'Iced Caramel Macchiato', price: 39, image: '/assets/images/Iced Caramel Macchiato_.jpg' },
    { productNo: 3, description: 'Iced Don Darko', price: 39, image: '/assets/images/Iced Don Darko.jpg' },
    { productNo: 4, description: 'Iced Don Machatos', price: 39, image: '/assets/images/Iced Don Machatos.jpg' },
    { productNo: 5, description: 'Iced Donya Berry', price: 39, image: '/assets/images/Iced Donya Berry.jpg' },
    { productNo: 6, description: 'Iced Matcha Berry', price: 39, image: '/assets/images/Iced Matcha Berry_.jpg' },
    { productNo: 7, description: 'Iced Oreo Coffee', price: 39, image: '/assets/images/Iced Oreo Coffee_.jpg' },
    { productNo: 8, description: 'Pure Ube', price: 39, image: '/assets/images/Pure Ube.jpg' },
    { productNo: 9, description: 'Spanish Latte', price: 39, image: '/assets/images/Spanish Latte.jpg' },
    { productNo: 10, description: 'Ube With Coffee', price: 59, image: '/assets/images/Ube With Coffee_.jpg' },
    { productNo: 11, description: 'Ube With Matcha', price: 59, image: '/assets/images/Ube With Matcha.jpg' },
    { productNo: 12, description: 'Hot Caramel', price: 39, image: '/assets/images/Hot Caramel.jpg' },
    { productNo: 13, description: 'Hot Don Barako', price: 39, image: '/assets/images/Hot Don Barako.jpg' },
    { productNo: 14, description: 'Hot Don Darko', price: 39, image: '/assets/images/Hot Don Dark9.jpg' },
    { productNo: 15, description: 'Frozen Yogurt (Sauce& Toppings)', price: 99, image: '/assets/images/Frozen Yogurt (Sauce& Toppings).jpg' },
    { productNo: 16, description: 'Frozen Yogurt (Toppings)', price: 99, image: '/assets/images/Frozen Yogurt (Toppings).jpg' },
    { productNo: 17, description: 'Frozen Yogurt( Sauce)', price: 59, image: '/assets/images/Frozen Yogurt( Sauce).jpg' },
    { productNo: 18, description: 'Frozen Yougurt(Plain)', price: 39, image: '/assets/images/Frozen Yougurt(Plain).jpg' },
  ];

  searchQuery = '';
  filteredProducts = [...this.products];

  constructor(private router: Router) {} // Inject Router

  // Search function
  filterProducts(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.filteredProducts = this.products.filter(product =>
        product.description.toLowerCase().includes(query)
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  // Function to handle the "VIEW" button click
  
  viewProduct(): void {
    this.router.navigate(['/product']); // Navigate to the menu
  }
  // Function to handle the bag click
  onBag(): void {
    this.router.navigate(['/bag']); // Navigate to the menu
  }
}

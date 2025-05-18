import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  imports: [CommonModule, FormsModule]

})
export class OrdersComponent {
  orders: any[] = [];

  constructor(private router: Router) {
    this.loadOrders();
  }

  onMenu(): void {
    this.router.navigate(['/menu']);
  }

  // Load orders from localStorage
  loadOrders(): void {
    const storedOrders = localStorage.getItem('orders');
    this.orders = storedOrders ? JSON.parse(storedOrders) : [];
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  imports: [CommonModule, FormsModule],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus(); // Check login status on initialization
    this.loadOrders();
  }

  // Redirect to login if the user is not logged in
  checkLoginStatus(): void {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  // Load orders from localStorage
  loadOrders(): void {
    const storedOrders = localStorage.getItem('orders');
    this.orders = storedOrders ? JSON.parse(storedOrders) : [];
  }

  onMenu(): void {
    this.router.navigate(['/menu']);
  }
}

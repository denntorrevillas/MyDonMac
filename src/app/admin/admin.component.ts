import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  orders: any[] = [];
  adminFullName: string = '';

  constructor(private router: Router) {
    this.checkLoginStatus(); // Check login before loading data
    this.loadAdminData();
    this.loadOrders();
  }

  checkLoginStatus(): void {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn !== 'true') {
      // Not logged in, redirect to login page
      this.router.navigate(['/adminLogIn']);
    }
  }

  loadAdminData(): void {
    const adminData = localStorage.getItem('admin');
    if (adminData) {
      const admin = JSON.parse(adminData);
      this.adminFullName = admin.fullName || '';
    }
  }

  loadOrders(): void {
    const ordersData = localStorage.getItem('orders');
    this.orders = ordersData ? JSON.parse(ordersData) : [];
  }

  updateOrderStatus(order: any): void {
    const updatedOrders = this.orders.map((o) => {
      if (o.orderNo === order.orderNo) {
        return { ...order };
      }
      return o;
    });

    this.orders = updatedOrders;
    localStorage.setItem('orders', JSON.stringify(this.orders));

    // Record the update in notifications
    this.recordNotification(order);

    alert(`Status for Order No: ${order.orderNo} updated to ${order.status}`);
  }

  recordNotification(order: any): void {
    const notificationsData = localStorage.getItem('notifications');
    const notifications = notificationsData ? JSON.parse(notificationsData) : [];

    const newNotification = {
      orderNo: order.orderNo,
      status: order.status,
      timestamp: new Date().toISOString(),
    };

    notifications.push(newNotification);
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

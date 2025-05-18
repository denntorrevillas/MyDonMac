import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent {
  shippingFee = 40;

  items: any[] = [];
  showOrderSummary = false;

  userName: string = '';
  address: string = '';
  phoneNumber: string = '';
  orderNo: string = '';

  constructor(private router: Router) {
    this.generateOrderNo();
    this.loadCartItems();
    this.loadUserInfo();
  }

  generateOrderNo(): void {
    const now = Date.now().toString();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    this.orderNo = `ORD-${now}-${random}`;
  }

  loadCartItems(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      this.items = parsedCart.map((item: any) => ({
        imageUrl: item.image,
        name: item.description,
        price: item.price,
        quantity: item.quantity,
      }));
    }
  }

  loadUserInfo(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.userName = user.fullName || user.name || 'N/A';
      this.address = user.deliveryAddress || user.address || 'N/A';
      this.phoneNumber = user.mobileNumber || user.phoneNumber || 'N/A';
    }
  }

  onMenu(): void {
    this.router.navigate(['/menu']);
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.updateCartStorage();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
      this.updateCartStorage();
    }
  }

  placeOrder(): void {
    this.saveOrder();
    this.showOrderSummary = true;
  }

  saveOrder(): void {
    const order = {
      orderNo: this.orderNo,
      userName: this.userName,
      address: this.address,
      phoneNumber: this.phoneNumber,
      items: this.items.filter(item => item.quantity > 0),
      subtotal: this.getSubtotal(),
      shippingFee: this.shippingFee,
      total: this.getTotal(),
      timestamp: new Date().toISOString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    localStorage.removeItem('cart'); // optional clear
  }

  getSubtotal(): number {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.shippingFee;
  }

  updateCartStorage(): void {
    const cartToStore = this.items.map((item) => ({
      image: item.imageUrl,
      description: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
    localStorage.setItem('cart', JSON.stringify(cartToStore));
  }
}

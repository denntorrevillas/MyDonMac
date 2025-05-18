import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ProfileComponent implements OnInit {
  user: any = null; // Full user object
  userName: string = '';
  address: string = '';
  email: string = '';
  mobileNumber: string = '';

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }

    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.userName = this.user.fullName || this.user.name || '';
      this.address = this.user.deliveryAddress || this.user.address || '';
      this.email = this.user.email || '';
      this.mobileNumber = this.user.mobileNumber || this.user.phoneNumber || '';
    }
  }

  saveProfile(): void {
    if (this.user) {
      this.user = {
        ...this.user,
        name: this.userName,
        address: this.address,
        email: this.email,
        phoneNumber: this.mobileNumber,
      };
      localStorage.setItem('user', JSON.stringify(this.user));
      alert('Profile saved successfully!');
    }
  }

  onMenu(): void {
    this.router.navigate(['/menu']);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

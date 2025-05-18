// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SignupComponent {
  fullName: string = '';
  mobileNumber: string = '';
  email: string = '';
  deliveryAddress: string = '';
  password: string = '';

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      this.router.navigate(['/menu']); // redirect to menu if already logged in
    }
  }
  
  onSignUp(): void {
    const userData = {
      fullName: this.fullName,
      mobileNumber: this.mobileNumber,
      email: this.email,
      deliveryAddress: this.deliveryAddress,
      password: this.password
    };
  
    // Check if a user with the same email already exists
    const existingUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (existingUser?.email === userData.email) {
      alert('An account with this email already exists.');
      return;
    }
  
    // Save new user to localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Sign up successful! Please log in.');
    this.router.navigate(['/login']);
  }
  
  onLogIn(): void {
    this.router.navigate(['/login']);
  }
  
}

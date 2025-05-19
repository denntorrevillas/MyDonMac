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

  // For password strength meter
  passwordStrength: number = 0;
  passwordStrengthColor: string = 'red';
  passwordStrengthText: string = '';

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      this.router.navigate(['/menu']); // redirect to menu if already logged in
    }
  }

  onSignUp(): void {
    if (this.passwordStrength < 40) {
      alert('Password strength is too weak. Please use a stronger password.');
      return;
    }

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

  checkPasswordStrength(): void {
    let strength = 0;
    const pwd = this.password;

    if (pwd.length >= 8) strength += 20;
    if (/[A-Z]/.test(pwd)) strength += 20;
    if (/[a-z]/.test(pwd)) strength += 20;
    if (/[0-9]/.test(pwd)) strength += 20;
    if (/[\W_]/.test(pwd)) strength += 20; // special char

    this.passwordStrength = strength;

    if (strength < 40) {
      this.passwordStrengthColor = 'red';
      this.passwordStrengthText = 'Weak';
    } else if (strength < 80) {
      this.passwordStrengthColor = 'orange';
      this.passwordStrengthText = 'Moderate';
    } else {
      this.passwordStrengthColor = 'green';
      this.passwordStrengthText = 'Strong';
    }
  }
}

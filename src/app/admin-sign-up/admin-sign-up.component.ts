import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AdminSignUpComponent {
  fullName: string = '';
  mobileNumber: string = '';
  email: string = '';
  password: string = '';
  passwordStrength: string = 'Weak';
  strengthPercentage: number = 0;

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      this.router.navigate(['/menu']);
    }
  }

  evaluatePasswordStrength(): void {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongRegex.test(this.password)) {
      this.passwordStrength = 'Strong';
      this.strengthPercentage = 100;
    } else if (mediumRegex.test(this.password)) {
      this.passwordStrength = 'Medium';
      this.strengthPercentage = 60;
    } else {
      this.passwordStrength = 'Weak';
      this.strengthPercentage = 30;
    }
  }

  getStrengthColor(): string {
    if (this.strengthPercentage === 100) return '#28a745'; // Green
    if (this.strengthPercentage === 60) return '#ffc107'; // Yellow
    return '#dc3545'; // Red
  }

  onSignUp(): void {
    if (this.passwordStrength === 'Weak') {
      alert('Your password is too weak. Please use a stronger password.');
      return;
    }

    const adminData = {
      fullName: this.fullName,
      mobileNumber: this.mobileNumber,
      email: this.email,
      password: this.password,
    };

    const existingAdmin = JSON.parse(localStorage.getItem('admin') || '{}');
    if (existingAdmin?.email === adminData.email) {
      alert('An admin account with this email already exists.');
      return;
    }

    localStorage.setItem('admin', JSON.stringify(adminData));
    alert('Admin sign-up successful! Please log in.');
    this.router.navigate(['/adminLogIn']);
  }

  onLogIn(): void {
    this.router.navigate(['/adminLogIn']);
  }
}

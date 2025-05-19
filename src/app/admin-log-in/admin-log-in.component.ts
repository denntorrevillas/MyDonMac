import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AdminLogInComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Email and Password are required.';
      return;
    }

    // Check for admin credentials
    const storedAdmin = localStorage.getItem('admin');

    if (!storedAdmin) {
      this.errorMessage = 'No admin account found. Please sign up first.';
      return;
    }

    const admin = JSON.parse(storedAdmin);

    if (this.email === admin.email && this.password === admin.password) {
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful!');
      this.router.navigate(['/admin']); // Redirect to the admin dashboard
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }

  onSignUp(): void {
    this.router.navigate(['/adminSignUp']);
  }
}

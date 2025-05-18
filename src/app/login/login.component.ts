import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

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

    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      this.errorMessage = 'No user found. Please sign up first.';
      return;
    }

    const user = JSON.parse(storedUser);

    if (this.email === user.email && this.password === user.password) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/menu']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }

  onSignUp(): void {
    this.router.navigate(['/signup']);
  }
}

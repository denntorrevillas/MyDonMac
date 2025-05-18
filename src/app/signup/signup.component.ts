import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';
  mobileNumber: string = '';
  email: string = '';
  deliveryAddress: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Method to handle the sign-up functionality
  onSignUp(): void {
    // Log the user data (for demo purposes)
    console.log({
      fullName: this.fullName,
      mobileNumber: this.mobileNumber,
      email: this.email,
      deliveryAddress: this.deliveryAddress,
      password: this.password
    });

    // Store the user data in local storage (optional, for demo purposes)
    localStorage.setItem('user', JSON.stringify({
      fullName: this.fullName,
      mobileNumber: this.mobileNumber,
      email: this.email,
      deliveryAddress: this.deliveryAddress,
      password: this.password
    }));

    // Navigate to the login page after sign-up
    this.router.navigate(['/login']);
  }

  // Method to navigate to the login page
  onLogIn(): void {
    this.router.navigate(['/login']);
  }
}

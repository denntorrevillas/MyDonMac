import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ Make sure it's plural
})
export class LoginComponent {

  constructor(private router: Router) {}

  onLogin() {
    // Add logic here for login check if needed

    // Redirect to menu
    this.router.navigate(['/menu']);
  }

  onSignUp() {
    // Redirect to the signup page
    this.router.navigate(['/signup']);
  }

  onMenu(){
    this.router.navigate(['/menu']);
  }
}

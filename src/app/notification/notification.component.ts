import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus(); // Check login status
    this.loadNotifications();
  }

  checkLoginStatus(): void {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn !== 'true') {
      // Redirect to login page if not logged in
      this.router.navigate(['/login']);
    }
  }

  loadNotifications(): void {
    const notificationsData = localStorage.getItem('notifications');
    this.notifications = notificationsData ? JSON.parse(notificationsData) : [];
  }

  onMenu(): void {
    this.router.navigate(['/menu']);
  }
}

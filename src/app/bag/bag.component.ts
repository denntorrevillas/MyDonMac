import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent {
  items = [
    {
      imageUrl: '/assets/images/Pure Ube.jpg', brand: 'Don Barako',
      name: 'Pure Ube',
      price: 39,
      quantity: 5,
    },
   
    {
      imageUrl: '/assets/images/Frozen Yougurt(Plain).jpg', brand: 'Don Barako',
      name: 'Frozen Yougurt(Plain)',
      price: 39,
      quantity: 7,
    },

    {
      imageUrl: '/assets/images/Iced Don Darko.jpg', brand: 'Don Barako',
      name: 'Iced Don Darko',
      price: 39,
      quantity: 4,
    },

    {
      imageUrl: '/assets/images/Hot Don Barako.jpg', brand: 'Don Barako',
      name: 'Hot Don Barako',
      price: 39,
      quantity: 9,
    },

    {
      imageUrl: '/assets/images/Iced Donya Berry.jpg', brand: 'Don Barako',
      name: 'Iced Donya Berry',
      price: 39,
      quantity: 6,
    },

    {
      imageUrl: '/assets/images/Iced Black Forest_.jpg', brand: 'Don Barako',
      name: 'Iced Black Forest',
      price: 39,
      quantity: 3,
    },

    {
      imageUrl: '/assets/images/Frozen Yogurt (Toppings).jpg', brand: 'Don Barako',
      name: 'Frozen Yogurt (Toppings)',
      price: 99,
      quantity: 7,
    },

    {
      imageUrl: '/assets/images/Iced Oreo Coffee_.jpg', brand: 'Don Barako',
      name: ' Iced Oreo Coffee',
      price: 39,
      quantity: 8,
    },

    {
      imageUrl: '/assets/images/Hot Caramel.jpg', brand: 'Don Barako',
      name: 'Hot Caramel',
      price: 39,
      quantity: 10,
    },

    {
      imageUrl: '/assets/images/Frozen Yogurt( Sauce).jpg', brand: 'Don Barako',
      name: 'Frozen Yogurt( Sauce)',
      price: 99,
      quantity: 5,
    },

    {
      imageUrl: '/assets/images/Spanish Latte.jpg', brand: 'Don Barako',
      name: 'Spanish Latte',
      price: 39,
      quantity: 3,
    },
   
  ];

  increaseQuantity(item: any): void {
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component'; // Import your menu component
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { BagComponent } from './bag/bag.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { NotificationComponent } from './notification/notification.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product', component: ProductComponent },
  { path: 'bag', component: BagComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminLogIn', component: AdminLogInComponent },
  { path: 'adminSignUp', component: AdminSignUpComponent },
   { path: 'notification', component: NotificationComponent }
 // Add this route
];

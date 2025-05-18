import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component'; // Import your menu component
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { BagComponent } from './bag/bag.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'product', component: ProductComponent },
  { path: 'bag', component: BagComponent }
 // Add this route
];

import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'contact-us', component: ContactUsComponent },
  // admin
  {
    path: '',
    children: [{ path: 'admin-login', component: AdminLoginComponent }],
  },
  {
    path: '',
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'admin/user', component: UserCrudComponent },
      { path: 'admin/product', component: ProductComponent },
    ],
  },
  {
    path: '',
    children: [
      { path: 'sign-in', component: SigninSignupComponent },
      { path: 'sign-up', component: SigninSignupComponent },
    ],
  },
];

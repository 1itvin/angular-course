import { Routes } from '@angular/router';

// import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // { path: 'categories', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
];

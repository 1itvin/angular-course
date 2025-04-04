import { Routes } from '@angular/router';

import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
];

import { Routes } from '@angular/router';

import { CalculatorComponent } from './shared/calculator/calculator.component';
import { UserCardComponent } from './shared/user-card/user-card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-card', pathMatch: 'full' },
  {
    path: 'calculator',
    component: CalculatorComponent,
    data: { breadcrumb: 'Calculator' },
  },
  {
    path: 'user-card',
    component: UserCardComponent,
    data: { breadcrumb: 'User card' },
  },
  {
    path: '**',
    component: CalculatorComponent,
    data: { breadcrumb: '404' },
  },
];

import { Routes } from '@angular/router';

import { CalculatorComponent } from './shared/calculator/calculator.component';
import { UserCardComponent } from './shared/user-card/user-card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-card', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'user-card', component: UserCardComponent },
  { path: '**', component: CalculatorComponent },
];

import { Component } from '@angular/core';

import { CalculatorComponent } from './shared/calculator/calculator.component';
import { MoreInfoButtonComponent } from './shared/more-info-button/more-info-button.component';
import { UserInfoComponent } from './shared/user-info/user-info.component';

@Component({
  selector: 'app-root',
  imports: [
    // components
    CalculatorComponent,
    MoreInfoButtonComponent,
    UserInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

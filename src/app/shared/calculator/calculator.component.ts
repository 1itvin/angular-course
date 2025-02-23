import { Component } from '@angular/core';

import { CalculatorButtonComponent } from './calculator-button/calculator-button.component';

@Component({
  selector: 'app-calculator',
  imports: [
    // components
    CalculatorButtonComponent,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {}

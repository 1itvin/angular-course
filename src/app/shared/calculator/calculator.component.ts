import { Component } from '@angular/core';

import { ButtonConfig } from '../interfaces/button-config.interface';
import { CalculatorButtonsDirective } from '../calculator-buttons.directive';

@Component({
  selector: 'app-calculator',
  imports: [
    // directives
    CalculatorButtonsDirective,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public buttonsConfig: ButtonConfig[] = [
    {
      operation: 'toggle-theme',
      displayValue: '🌓',
      handleClick: () => this.handleToggleTheme(),
    },
    {
      operation: 'all-clear',
      displayValue: 'AC',
      handleClick: () => this.handleAllClear(),
    },
    {
      operation: 'clear',
      displayValue: 'C',
      handleClick: () => this.handleClear(),
    },
    {
      operation: 'percent',
      displayValue: '%',
      handleClick: () => this.handlePercent(),
    },
    {
      operation: 'digit7',
      displayValue: '7',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'digit8',
      displayValue: '8',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'digit9',
      displayValue: '9',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'divide',
      displayValue: '/',
      handleClick: () => this.handleDivide(),
    },
    {
      operation: 'digit4',
      displayValue: '4',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'digit5',
      displayValue: '5',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'digit6',
      displayValue: '6',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'multiply',
      displayValue: '*',
      handleClick: () => this.handleMultiply(),
    },
    {
      operation: 'digit1',
      displayValue: '1',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'digit2',
      displayValue: '2',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'digit3',
      displayValue: '3',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'subtract',
      displayValue: '-',
      handleClick: () => this.handleSubtract(),
    },
    {
      operation: 'digit0',
      displayValue: '0',
      handleClick: () => this.handleDigit(),
    },
    {
      operation: 'point',
      displayValue: '.',
      handleClick: () => this.handlePoint(),
    },
    {
      operation: 'equals',
      displayValue: '=',
      handleClick: () => this.handleEquals(),
    },
    {
      operation: 'add',
      displayValue: '+',
      handleClick: () => this.handleAdd(),
    },
  ];

  public handleAdd() {}

  public handleAllClear() {}

  public handleClear() {}

  public handleDigit() {}

  public handleDivide() {}

  public handleEquals() {}

  public handleMultiply() {}

  public handlePercent() {}

  public handlePoint() {}

  public handleSubtract() {}

  public handleToggleTheme() {}
}

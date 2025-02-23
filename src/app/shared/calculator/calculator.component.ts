import { Component } from '@angular/core';

import { ButtonConfig } from '../interfaces/button-config.interface';
import { CalculatorButtonsDirective } from '../calculator-buttons.directive';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [
    // components
    CalculatorDisplayComponent,

    // directives
    CalculatorButtonsDirective,

    // modules
    CommonModule,
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
      handleClick: () => this.handleClear(this.currentValue),
    },
    {
      operation: 'percent',
      displayValue: '%',
      handleClick: () => this.appendSymbol('%'),
    },
    {
      operation: 'digit7',
      displayValue: '7',
      handleClick: () => this.appendSymbol('7'),
    },
    {
      operation: 'digit8',
      displayValue: '8',
      handleClick: () => this.appendSymbol('8'),
    },
    {
      operation: 'digit9',
      displayValue: '9',
      handleClick: () => this.appendSymbol('9'),
    },
    {
      operation: 'divide',
      displayValue: '/',
      handleClick: () => this.appendSymbol('/'),
    },
    {
      operation: 'digit4',
      displayValue: '4',
      handleClick: () => this.appendSymbol('4'),
    },
    {
      operation: 'digit5',
      displayValue: '5',
      handleClick: () => this.appendSymbol('5'),
    },
    {
      operation: 'digit6',
      displayValue: '6',
      handleClick: () => this.appendSymbol('6'),
    },
    {
      operation: 'multiply',
      displayValue: '*',
      handleClick: () => this.appendSymbol('*'),
    },
    {
      operation: 'digit1',
      displayValue: '1',
      handleClick: () => this.appendSymbol('1'),
    },
    {
      operation: 'digit2',
      displayValue: '2',
      handleClick: () => this.appendSymbol('2'),
    },
    {
      operation: 'digit3',
      displayValue: '3',
      handleClick: () => this.appendSymbol('3'),
    },
    {
      operation: 'subtract',
      displayValue: '-',
      handleClick: () => this.appendSymbol('-'),
    },
    {
      operation: 'digit0',
      displayValue: '0',
      handleClick: () => this.appendSymbol('0'),
    },
    {
      operation: 'point',
      displayValue: '.',
      handleClick: () => this.appendSymbol('.'),
    },
    {
      operation: 'equals',
      displayValue: '=',
      handleClick: () => this.appendSymbol('='),
    },
    {
      operation: 'add',
      displayValue: '+',
      handleClick: () => this.appendSymbol('+'),
    },
  ];

  public currentTheme: string = 'light-theme';

  public currentValue: string = '0';

  public appendSymbol(symbol: string) {
    this.currentValue += symbol;
  }

  public handleAllClear() {
    this.currentValue = '0';
  }

  public handleClear(value: string) {
    const lastSymbolIndex = value.length - 1;

    if (
      value[lastSymbolIndex] == '+' ||
      value[lastSymbolIndex] == '-' ||
      value[lastSymbolIndex] == '*' ||
      value[lastSymbolIndex] == '/'
    ) {
      this.currentValue = value;
    } else if (lastSymbolIndex > 0) {
      value = value.slice(0, lastSymbolIndex);
      this.handleClear(value);
    } else {
      this.currentValue = '0';
    }
  }

  public handleToggleTheme() {
    this.currentTheme =
      this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
}

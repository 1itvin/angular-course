import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { ButtonConfig } from '../interfaces/button-config.interface';
import { CalculatorButtonsDirective } from '../calculator-buttons.directive';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import { DisplayValues } from '../enums/displayValues.enum';
import { Operations } from '../enums/operations.enum';

@Component({
  selector: 'app-calculator',
  imports: [
    // components
    CalculatorDisplayComponent,

    // directives
    CalculatorButtonsDirective,
    NgClass,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public buttonsConfig: ButtonConfig[] = [
    {
      operation: Operations.ToggleTheme,
      displayValue: DisplayValues.ToggleTheme,
      handleClick: () => this.handleToggleTheme(),
    },
    {
      operation: Operations.AllClear,
      displayValue: DisplayValues.AllClear,
      handleClick: () => this.handleAllClear(),
    },
    {
      operation: Operations.Clear,
      displayValue: DisplayValues.Clear,
      handleClick: () => this.handleClear(this.currentValue),
    },
    {
      operation: Operations.Percent,
      displayValue: DisplayValues.Percent,
      handleClick: () => this.appendSymbol('%'),
    },
    {
      operation: Operations.Digit7,
      displayValue: DisplayValues.Digit7,
      handleClick: () => this.appendSymbol('7'),
    },
    {
      operation: Operations.Digit8,
      displayValue: DisplayValues.Digit8,
      handleClick: () => this.appendSymbol('8'),
    },
    {
      operation: Operations.Digit9,
      displayValue: DisplayValues.Digit9,
      handleClick: () => this.appendSymbol('9'),
    },
    {
      operation: Operations.Divide,
      displayValue: DisplayValues.Divide,
      handleClick: () => this.appendSymbol('/'),
    },
    {
      operation: Operations.Digit4,
      displayValue: DisplayValues.Digit4,
      handleClick: () => this.appendSymbol('4'),
    },
    {
      operation: Operations.Digit5,
      displayValue: DisplayValues.Digit5,
      handleClick: () => this.appendSymbol('5'),
    },
    {
      operation: Operations.Digit6,
      displayValue: DisplayValues.Digit6,
      handleClick: () => this.appendSymbol('6'),
    },
    {
      operation: Operations.Multiply,
      displayValue: DisplayValues.Multiply,
      handleClick: () => this.appendSymbol('*'),
    },
    {
      operation: Operations.Digit1,
      displayValue: DisplayValues.Digit1,
      handleClick: () => this.appendSymbol('1'),
    },
    {
      operation: Operations.Digit2,
      displayValue: DisplayValues.Digit2,
      handleClick: () => this.appendSymbol('2'),
    },
    {
      operation: Operations.Digit3,
      displayValue: DisplayValues.Digit3,
      handleClick: () => this.appendSymbol('3'),
    },
    {
      operation: Operations.Subtract,
      displayValue: DisplayValues.Subtract,
      handleClick: () => this.appendSymbol('-'),
    },
    {
      operation: Operations.Digit0,
      displayValue: DisplayValues.Digit0,
      handleClick: () => this.appendSymbol('0'),
    },
    {
      operation: Operations.Point,
      displayValue: DisplayValues.Point,
      handleClick: () => this.appendSymbol('.'),
    },
    {
      operation: Operations.Equals,
      displayValue: DisplayValues.Equals,
      handleClick: () => this.appendSymbol('='),
    },
    {
      operation: Operations.Add,
      displayValue: DisplayValues.Add,
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

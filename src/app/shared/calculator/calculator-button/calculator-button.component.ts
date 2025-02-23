import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
})
export class CalculatorButtonComponent {
  @Input() operation: string = '';
  @Input() displayValue: string = '';
  @Input() handleClick: () => void = () => {};
}

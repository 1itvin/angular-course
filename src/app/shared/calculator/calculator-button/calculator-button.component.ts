import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
})
export class CalculatorButtonComponent {
  @Input() operation = '';
  @Input() displayValue = '';
  @Input() handleClick: () => void = () => {
    // функциональность будет реализована через инпут
  };
}

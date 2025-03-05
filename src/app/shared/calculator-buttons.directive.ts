import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

import { ButtonConfig } from '../shared/interfaces/button-config.interface';
import { CalculatorButtonComponent } from './calculator/calculator-button/calculator-button.component';

@Directive({
  selector: '[appCalculatorButtons]',
})
export class CalculatorButtonsDirective implements OnInit {
  @Input() buttonsConfig!: ButtonConfig[];

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private vcRef: ViewContainerRef
  ) {}

  public ngOnInit() {
    this.buttonsConfig.forEach((buttonConfig) => {
      const componentRef = this.vcRef.createComponent(
        CalculatorButtonComponent
      );
      componentRef.instance.operation = buttonConfig.operation;
      componentRef.instance.displayValue = buttonConfig.displayValue;
      componentRef.instance.handleClick = buttonConfig.handleClick;

      this.renderer.addClass(componentRef.location.nativeElement, 'btn');
      this.renderer.appendChild(
        this.elRef.nativeElement,
        componentRef.location.nativeElement
      );
    });
  }
}

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

// Честно говоря, у меня не получилось отобразить кнопки динамически через директиву так, чтобы работали гриды.
// Только с помощью ИИ, танцев с бубном и более чем часовой работы этих двух компонентов в тандеме
// удалось получить такой же результат, как и с помощью обычного хардкода

@Directive({
  selector: '[appCalculatorButtons]',
})
export class CalculatorButtonsDirective implements OnInit {
  @Input() buttonsConfig!: ButtonConfig[];

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2,
    private _vcRef: ViewContainerRef
  ) {}

  public ngOnInit() {
    this.buttonsConfig.forEach((buttonConfig) => {
      const componentRef = this._vcRef.createComponent(
        CalculatorButtonComponent
      );
      componentRef.instance.operation = buttonConfig.operation;
      componentRef.instance.displayValue = buttonConfig.displayValue;
      componentRef.instance.handleClick = buttonConfig.handleClick;

      this._renderer.addClass(componentRef.location.nativeElement, 'btn');
      this._renderer.appendChild(
        this._elRef.nativeElement,
        componentRef.location.nativeElement
      );
    });
  }
}

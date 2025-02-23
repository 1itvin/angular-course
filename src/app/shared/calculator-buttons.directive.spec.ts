import { ViewContainerRef, Renderer2, ElementRef } from '@angular/core';

import { CalculatorButtonsDirective } from './calculator-buttons.directive';

describe('CalculatorButtonsDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;
  let viewContainerRef: ViewContainerRef;

  beforeEach(() => {
    elementRef = {} as ElementRef;
    renderer = {} as Renderer2;
    viewContainerRef = {} as ViewContainerRef;
  });

  it('should create an instance', () => {
    const directive = new CalculatorButtonsDirective(
      elementRef,
      renderer,
      viewContainerRef
    );
    expect(directive).toBeTruthy();
  });
});

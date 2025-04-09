import { AsyncPipe, JsonPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Component, forwardRef, inject, Input } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldAppearance,
  MatFormFieldControl,
} from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  imports: [
    // modules
    MatInputModule,

    // pipes
    AsyncPipe,
    JsonPipe,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: MatFormFieldControl,
      useExisting: InputComponent,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() type = 'text';
  @Input() formControlName = '';
  @Input() label = '';
  @Input() readonly = false;
  @Input() required = false;

  public disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private controlContainer = inject(ControlContainer);

  public onChange: (value: string | number | null) => void = () => {
    // TODO: Implement onChange functionality
  };

  public onTouch: () => void = () => {
    // TODO: Implement onTouch functionality
  };

  public onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.onChange(value);
  }

  public get control(): FormControl {
    return (
      this.controlContainer
        ? this.controlContainer.control?.get(this.formControlName)
        : null
    ) as FormControl;
  }

  public writeValue(value: string | number | null): void {
    if (this.control) {
      this.control.setValue(value, { emitEvent: false });
    }
  }

  public registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled$.next(isDisabled);
  }
}

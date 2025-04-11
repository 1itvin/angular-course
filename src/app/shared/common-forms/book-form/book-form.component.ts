import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '../../custom-forms/input/input.component';

@Component({
  selector: 'app-book-form',
  imports: [
    // components
    InputComponent,

    // modules
    ReactiveFormsModule,
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  public form: FormGroup;

  private readonly fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      title: [null],
      author: [null],
      genre: [null],
      publication_year: [null],
      image_url: [null],
    });
  }
}

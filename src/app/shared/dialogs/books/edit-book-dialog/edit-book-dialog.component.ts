import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { Book } from '../../../../core/models/book.type';
import { BookService } from '../../../../core/services/book.service';
import { ButtonComponent } from '../../../custom-forms/button/button.component';
import { InputComponent } from '../../../custom-forms/input/input.component';

@Component({
  selector: 'app-edit-book-dialog',
  imports: [
    // components
    ButtonComponent,
    InputComponent,

    // modules
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-book-dialog.component.html',
  styleUrl: './edit-book-dialog.component.scss',
})
export class EditBookDialogComponent {
  @Input() id!: string;

  public form: FormGroup;

  private readonly bookService = inject(BookService);
  private readonly dialogRef = inject(MatDialogRef<EditBookDialogComponent>);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      title: [null],
      author: [null],
      genre: [null],
      publication_year: [null],
      // image_url: [null],
    });
  }

  public edit() {
    if (this.form.valid) {
      const updatedBook: Partial<Book> = this.form.value;
      this.bookService.updateBook(this.id, updatedBook).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}

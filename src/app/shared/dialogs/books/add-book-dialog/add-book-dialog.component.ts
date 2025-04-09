import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Book } from '../../../../core/models/book.model';
import { BookService } from '../../../../core/services/book.service';
import { InputComponent } from '../../../custom-forms/input/input.component';

@Component({
  selector: 'app-add-book-dialog',
  imports: [
    // components
    InputComponent,

    // modules
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-book-dialog.component.html',
  styleUrl: './add-book-dialog.component.scss',
})
export class AddBookDialogComponent {
  public form: FormGroup;

  private readonly bookService = inject(BookService);
  private readonly dialogRef = inject(MatDialogRef<AddBookDialogComponent>);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      title: [null],
      author: [null],
      genre: [null],
      publicationYear: [null],
    });
  }

  public save(): void {
    if (this.form.valid) {
      const book: Partial<Book> = this.form.value;
      this.bookService.postBook(book).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}

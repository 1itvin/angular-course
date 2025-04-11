import { Component, inject, ViewChild } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { Book } from '../../../../core/models/book.type';
import { BookFormComponent } from '../../../common-forms/book-form/book-form.component';
import { BookService } from '../../../../core/services/book.service';
import { ButtonComponent } from '../../../custom-forms/button/button.component';

@Component({
  selector: 'app-add-book-dialog',
  imports: [
    // components
    BookFormComponent,
    ButtonComponent,

    // modules
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-book-dialog.component.html',
  styleUrl: './add-book-dialog.component.scss',
})
export class AddBookDialogComponent {
  @ViewChild(BookFormComponent) bookFormComponent!: BookFormComponent;

  private readonly bookService = inject(BookService);
  private readonly dialogRef = inject(MatDialogRef<AddBookDialogComponent>);

  public save(): void {
    if (this.bookFormComponent.form.valid) {
      const book: Partial<Book> = this.bookFormComponent.form.value;
      this.bookService.postBook(book).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}

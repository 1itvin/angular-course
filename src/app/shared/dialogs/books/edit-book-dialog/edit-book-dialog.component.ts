import { Component, Inject, inject, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { Book } from '../../../../core/models/book.type';
import { BookFormComponent } from '../../../common-forms/book-form/book-form.component';
import { BookService } from '../../../../core/services/book.service';
import { ButtonComponent } from '../../../custom-forms/button/button.component';

@Component({
  selector: 'app-edit-book-dialog',
  imports: [
    // components
    BookFormComponent,
    ButtonComponent,

    // modules
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-book-dialog.component.html',
  styleUrl: './edit-book-dialog.component.scss',
})
export class EditBookDialogComponent {
  @ViewChild(BookFormComponent) bookFormComponent!: BookFormComponent;

  private readonly bookService = inject(BookService);
  private readonly dialogRef = inject(MatDialogRef<EditBookDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}

  public edit(): void {
    if (this.bookFormComponent.form.valid) {
      const updatedBookInfo: Partial<Book> = this.bookFormComponent.form.value;
      this.bookService
        .updateBook(this.data.id, updatedBookInfo)
        .subscribe(() => {
          this.dialogRef.close(true);
        });
    }
  }
}

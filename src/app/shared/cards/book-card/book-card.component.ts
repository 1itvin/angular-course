import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookImageComponent } from './book-image/book-image.component';
import { BookService } from '../../../core/services/book.service';
import { ButtonComponent } from '../../custom-forms/button/button.component';
import { EditBookDialogComponent } from '../../dialogs/books/edit-book-dialog/edit-book-dialog.component';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-book-card',
  imports: [
    // components
    BookDetailsComponent,
    BookImageComponent,
    ButtonComponent,
    LikeComponent,

    // modules
    MatCardModule,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() id!: string;
  @Input() imageSource?: string;
  @Input() title!: string;
  @Input() publicationYear!: Date;
  @Input() author?: string;

  private readonly bookService = inject(BookService);
  private readonly dialog = inject(MatDialog);

  public openEditDialog(): void {
    this.dialog.open(EditBookDialogComponent);
  }

  public delete() {
    this.bookService.deleteBook(this.id).subscribe(() => {
      console.log(`Книга с id ${this.id} успешно удалена`);
    });
  }
}

import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddBookDialogComponent } from '../../dialogs/books/add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private dialog = inject(MatDialog);

  public openAddDialog(): void {
    this.dialog.open(AddBookDialogComponent);
  }
}

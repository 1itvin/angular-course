import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddBookDialogComponent } from '../../dialogs/books/add-book-dialog/add-book-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy, OnInit {
  private dialog = inject(MatDialog);
  private dialogRefSub!: Subscription;
  private toastr = inject(ToastrService);

  public openAddDialog(): void {
    this.dialog.open(AddBookDialogComponent);
  }

  public ngOnInit(): void {
    this.dialogRefSub = this.dialog.afterAllClosed.subscribe(() => {
      this.showError();
      this.showSuccess();
    });
  }

  public showSuccess(): void {
    this.toastr.success('Книга успешно добавлена!');
  }

  public showError(): void {
    this.toastr.error('Ошибка при добавлении книги');
  }

  public ngOnDestroy(): void {
    if (this.dialogRefSub) {
      this.dialogRefSub.unsubscribe();
    }
  }
}

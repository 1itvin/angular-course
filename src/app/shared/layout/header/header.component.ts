import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { AddBookDialogComponent } from '../../dialogs/books/add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy, OnInit {
  private dialogRefSub!: Subscription;

  private readonly dialog = inject(MatDialog);
  private readonly toastr = inject(ToastrService);

  public ngOnInit(): void {
    this.dialogRefSub = this.dialog.afterAllClosed.subscribe(() => {
      this.showError();
      this.showSuccess();
    });
  }

  public openAddDialog(): void {
    this.dialog.open(AddBookDialogComponent);
  }

  public showSuccess(): void {
    this.toastr.success('The book has been successfully added!');
  }

  public showError(): void {
    this.toastr.error('Error adding the book');
  }

  public ngOnDestroy(): void {
    if (this.dialogRefSub) {
      this.dialogRefSub.unsubscribe();
    }
  }
}

import {
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ToastrService } from 'ngx-toastr';

import { AddBookDialogComponent } from '../../dialogs/books/add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private readonly toastr = inject(ToastrService);

  public ngOnInit(): void {
    this.dialog.afterAllClosed
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
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
}

import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ToastrService } from 'ngx-toastr';

import { AddBookDialogComponent } from '../../dialogs/books/add-book-dialog/add-book-dialog.component';
import { ButtonComponent } from '../../custom-forms/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    // components
    ButtonComponent,

    // modules
    MatTabsModule,
    MatIconModule,
    RouterModule,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public selectedIndex = -1;

  private routeMap: Record<string, number> = {
    '/home': 0,
    '/categories': 1,
  } as const;

  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  public ngOnInit() {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        const currentUrl = this.router.url;
        this.selectedIndex = this.getSelectedIndex(currentUrl);
      });

    this.dialog.afterAllClosed
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.showError();
        this.showSuccess();
      });
  }

  public onTabChange(index: number) {
    const route = Object.keys(this.routeMap).find(
      (key) => this.routeMap[key] === index
    );
    if (route) {
      this.router.navigate([route]);
    }
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

  private getSelectedIndex(url: string): number {
    const route = Object.keys(this.routeMap).find((key) => url.includes(key));
    return route !== undefined ? this.routeMap[route] : -1;
  }
}

import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Book } from '../../core/models/book.type';
import { BookCardComponent } from '../../shared/book-card/book-card.component';
import { BookService } from './../../core/services/book.service';

@Component({
  selector: 'app-home',
  imports: [
    // components
    BookCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public books: Book[] = [];

  private readonly bookService = inject(BookService);
  private readonly destroyRef = inject(DestroyRef);

  public ngOnInit() {
    this.bookService
      .getAllBooks()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((books) => {
        this.books = books;
      });
  }
}

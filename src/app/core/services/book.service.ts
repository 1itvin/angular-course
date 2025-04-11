import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_PATH } from '../constants/api.consts';
import { Book, BookResponse } from '../models/book.type';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly http = inject(HttpClient);

  public postBook(bookInfo: Partial<Book>): Observable<BookResponse> {
    return this.http.post<BookResponse>(`${BASE_PATH}/books`, bookInfo);
  }

  public getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${BASE_PATH}/books/${id}`);
  }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${BASE_PATH}/books`);
  }

  public updateBook(
    id: string,
    bookInfo: Partial<Book>
  ): Observable<BookResponse> {
    return this.http.put<BookResponse>(`${BASE_PATH}/books/${id}`, bookInfo);
  }

  public deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${BASE_PATH}/books/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_PATH } from '../constants/api.consts';
import { Book } from '../models/book.model';
import { BookResponse } from '../models/book-response.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  public postBook(bookInfo: Partial<Book>): Observable<BookResponse> {
    return this.http.post<BookResponse>(`${BASE_PATH}/book/add`, bookInfo);
  }

  public getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${BASE_PATH}/book/${id}`);
  }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${BASE_PATH}/book`);
  }
}

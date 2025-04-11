import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_PATH } from '../constants/api.consts';
import { Genre } from '../models/genre.type';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private readonly http = inject(HttpClient);

  public getGenreById(id: string): Observable<Genre> {
    return this.http.get<Genre>(`${BASE_PATH}/genres/${id}`);
  }

  public getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${BASE_PATH}/genres`);
  }
}

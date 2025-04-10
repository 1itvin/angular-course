import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { BASE_PATH } from '../constants/api.consts';
import { getUserRolesFromString } from '../models/role.type';
import { User, UserResponse } from '../models/user.type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private userService = inject(UserService);

  public isLoggedIn$: Observable<boolean> = this.userService
    .getUser()
    .pipe(map((user) => user !== null));

  /**
   * Авторизация пользователя с использованием имени и пароля
   * @param {string} email - почта пользователя
   * @param {string} password - пароль пользователя
   * @returns ответ на запрос авторизации с информацией о пользователе
   */
  public login(email: string, password: string): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(`${BASE_PATH}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          const user: User = {
            id: Number(res.id),
            username: res.username,
            email: res.email,
            roles: getUserRolesFromString(res.roles),
          };
          this.userService.setUser(user);
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(() => new Error('Failed to log in'));
        })
      );
  }

  public register(
    username: string,
    email: string,
    password: string
  ): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${BASE_PATH}/auth/registration`, {
      username,
      email,
      password,
    });
  }

  /**
   * Выход пользователя из системы, очищая состояние
   */
  public logout(): void {
    this.userService.setUser(null);
  }
}

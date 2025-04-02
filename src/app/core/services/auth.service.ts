import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { BASE_PATH } from '../constants/api.consts';
import { Role } from '../models/enums/roles.enum';
import { User } from '../models/user.model';
import { UserResponse } from '../models/user-response.model';
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
            roles: res.roles.map(
              (role: string) => ({ name: role } as unknown as Role)
            ),
          };
          this.userService.setUser(user);
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

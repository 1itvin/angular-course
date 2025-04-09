import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$ = new BehaviorSubject<User | null>(null);

  /**
   * Установить значение текущего пользователя
   * @param {User} user - пользователь, которого нужно установить
   */
  public setUser(user: User | null): void {
    this.user$.next(user);
  }

  /**
   * Получить значение текущего пользователя как наблюдаемый объект
   * @returns текущего пользователя
   */
  public getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }
}

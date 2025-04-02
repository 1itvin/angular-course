import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Установить значение в localStorage
   * @param {string} key - ключ
   * @param {T} value - значение
   */
  public set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Получить значение
   * @param {string} key - ключ
   * @returns значение или null, если ключ не найден
   */
  public get<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  /**
   * Удалить значение из localStorage
   * @param {string} key - ключ
   */
  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Проверить существует ли значение в localStorage
   * @param {string} key - ключ
   * @returns true если значение есть, fasle в простивном случае
   */
  public has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  /**
   * ! DANGER !
   * Очистить localStorage
   */
  public clear(): void {
    localStorage.clear();
  }
}

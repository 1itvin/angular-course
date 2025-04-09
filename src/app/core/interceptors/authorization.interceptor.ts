import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService } from '../services/local-storage.service';
import { localStorageTokens } from '../models/enums/local-storage-tokens.enum';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const ls = inject(LocalStorageService);
  if (ls.has(localStorageTokens.ACCESS_TOKEN)) {
    const tokenData = ls.get<{ token: string }>(
      localStorageTokens.ACCESS_TOKEN
    );
    if (tokenData && tokenData.token) {
      const token = tokenData.token;
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }
  return next(req);
};

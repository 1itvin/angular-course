import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { ACCESS_TOKEN } from '../constants/tokens.consts';
import { LocalStorageService } from '../services/local-storage.service';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const ls = inject(LocalStorageService);
  if (ls.has(ACCESS_TOKEN)) {
    const tokenData = ls.get<{ token: string }>(ACCESS_TOKEN);
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

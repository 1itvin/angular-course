import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideToastr } from 'ngx-toastr';

import { authorizationInterceptor } from './core/interceptors/authorization.interceptor';
import { routes } from './app.routes';
import { toastrConfig } from './toastr.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    provideRouter(routes),
    provideToastr(toastrConfig),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};

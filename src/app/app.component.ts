import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    // components
    FooterComponent,
    HeaderComponent,

    // modules
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // components
    BreadcrumbsComponent,

    // modules
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

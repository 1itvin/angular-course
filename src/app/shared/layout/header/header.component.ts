import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

import { ButtonComponent } from '../../custom-forms/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    // components
    ButtonComponent,

    // modules
    MatTabsModule,
    MatIconModule,
    RouterModule,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public selectedIndex = -1;

  private router = inject(Router);

  private readonly routeMap: Record<string, number> = {
    '/home': 0,
    '/categories': 1,
  } as const;

  public ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.selectedIndex = this.getSelectedIndex(currentUrl);
    });
  }

  public onTabChange(index: number) {
    const route = Object.keys(this.routeMap).find(
      (key) => this.routeMap[key] === index
    );
    if (route) {
      this.router.navigate([route]);
    }
  }

  private getSelectedIndex(url: string): number {
    const route = Object.keys(this.routeMap).find((key) => url.includes(key));
    return route !== undefined ? this.routeMap[route] : -1;
  }
}

import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  RouterModule,
  UrlSegment,
} from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { filter } from 'rxjs';

import { Breadcrumb } from '../interfaces/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumbs',
  imports: [
    // modules
    RouterModule,
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];

  private router = inject(Router);

  public ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.parseRoute(this.router.routerState.snapshot.root);
      });
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach((routerState) => {
        urlSegments = urlSegments.concat(routerState.url);
      });
      const url = urlSegments.map((urlSegment) => urlSegment.path).join('/');
      if (
        !this.breadcrumbs.some((breadcrumb) => breadcrumb.url === '/' + url)
      ) {
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url,
        });
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
}

import { Component } from '@angular/core';

import { MoreInfoButtonComponent } from './shared/more-info-button/more-info-button.component';
import { UserInfoComponent } from './shared/user-info/user-info.component';

@Component({
  selector: 'app-root',
  imports: [MoreInfoButtonComponent, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

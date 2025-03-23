import { Component } from '@angular/core';

import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-user-card',
  imports: [
    // components
    MoreInfoButtonComponent,
    UserInfoComponent,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {}

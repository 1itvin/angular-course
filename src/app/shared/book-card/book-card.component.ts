import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookImageComponent } from './book-image/book-image.component';
import { ButtonComponent } from '../custom-forms/button/button.component';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-book-card',
  imports: [
    // components
    BookDetailsComponent,
    BookImageComponent,
    ButtonComponent,
    LikeComponent,

    // modules
    MatCardModule,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {}

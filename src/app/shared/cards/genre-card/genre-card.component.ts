import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-genre-card',
  imports: [
    // modules
    MatCardModule,
  ],
  templateUrl: './genre-card.component.html',
  styleUrl: './genre-card.component.scss',
})
export class GenreCardComponent {
  @Input() genre!: string;
}

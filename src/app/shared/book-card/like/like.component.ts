import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-like',
  imports: [
    // modules
    MatIconModule,
  ],
  templateUrl: './like.component.html',
  styleUrl: './like.component.scss',
})
export class LikeComponent {
  public isFavorited = false;

  public toggleHeart(): void {
    this.isFavorited = !this.isFavorited;
  }
}

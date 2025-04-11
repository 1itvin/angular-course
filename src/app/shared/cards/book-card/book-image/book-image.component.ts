import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-image',
  imports: [],
  templateUrl: './book-image.component.html',
  styleUrl: './book-image.component.scss',
})
export class BookImageComponent {
  @Input() imageSource: string | undefined;

  public imageNotAvailable =
    'https://www.booklineservices.com/v1/image/cache/catalog/product/Book%202/NO%20IMAGE-600x770.jpg';
}

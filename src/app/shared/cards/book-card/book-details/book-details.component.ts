import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  @Input() title!: string;
  @Input() author?: string;
  @Input() publicationYear!: Date;
}

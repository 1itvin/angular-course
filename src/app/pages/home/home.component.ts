import { Component } from '@angular/core';
import { BookCardComponent } from "../../shared/book-card/book-card.component";

@Component({
  selector: 'app-home',
  imports: [BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component, HostBinding, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [
    // modules
    MatIconModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @HostBinding('class.outline') @Input() outline = false;
  @Input() icon?: string;
}

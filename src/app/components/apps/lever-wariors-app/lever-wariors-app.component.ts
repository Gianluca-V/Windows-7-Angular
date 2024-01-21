import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lever-wariors-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lever-wariors-app.component.html',
  styleUrl: './lever-wariors-app.component.scss'
})
export class LeverWariorsAppComponent {
  @Input() title!: String;
  @Input() icon!: String;
}

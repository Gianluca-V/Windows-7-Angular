import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-app.component.html',
  styleUrl: './test-app.component.scss'
})
export class TestAppComponent {
  @Input() title!: String;
  @Input() icon!: String;
}

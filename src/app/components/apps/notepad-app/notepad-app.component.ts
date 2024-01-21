import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notepad-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notepad-app.component.html',
  styleUrl: './notepad-app.component.scss'
})
export class NotepadAppComponent {
  @Input() title!: String;
  @Input() icon!: String;
}

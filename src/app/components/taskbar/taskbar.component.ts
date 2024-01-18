import { Component, OnInit, inject } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
  standalone: true
})
export class TaskbarComponent {
  dateTimeService = inject(DateTimeService);
}

import { AfterViewChecked, AfterViewInit, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { ZindexManagerService } from 'src/app/services/zindex-manager.service';

@Component({
  selector: 'app-taskbar-open-apps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskbar-open-apps.component.html',
  styleUrl: './taskbar-open-apps.component.scss'
})
export class TaskbarOpenAppsComponent {
  openAppsManagerService = inject(OpenAppsManagerService);
  zindexManagarService = inject(ZindexManagerService)
  @Input() app:any;

  pressApp(){
    if(this.openAppsManagerService.getAppState(this.app.id) == "minimized") this.openAppsManagerService.changeAppState(this.app.id,"open")
    this.zindexManagarService.updateZIndex(`#window-${this.app.id}`);
  }
}

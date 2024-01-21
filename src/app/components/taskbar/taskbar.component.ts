import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { TaskbarOpenAppsComponent } from "../taskbar-open-apps/taskbar-open-apps.component";
import { StartMenuComponent } from '../start-menu/start-menu.component';

@Component({
    selector: 'app-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.scss'],
    standalone: true,
    imports: [TaskbarOpenAppsComponent,StartMenuComponent]
})
export class TaskbarComponent {
  constructor(private el: ElementRef){}
  dateTimeService = inject(DateTimeService);
  openAppsManagerService = inject(OpenAppsManagerService);
  openApps = this.openAppsManagerService.openApps;

  startMenu:boolean = false;

  goToDesktop(){
    this.openApps().forEach((app)=>{
      this.openAppsManagerService.changeAppState(app.id,"minimized");
    })
  }

  startMenuToggle(){
    this.startMenu = !this.startMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Check if the click is outside the app
    if (!this.el.nativeElement.contains(event.target)) {
      this.startMenu = false;
    }
  }
}

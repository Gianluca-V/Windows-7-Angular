import { Component, effect, inject } from '@angular/core';
import { AppListService } from 'src/app/services/app-list.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { DesktopAppComponent } from "../desktop-app/desktop-app.component";
import { WindowComponent } from "../window/window.component";


@Component({
    selector: 'app-desktop',
    templateUrl: './desktop.component.html',
    standalone: true,
    styleUrls: ['./desktop.component.scss'],
    imports: [DesktopAppComponent, WindowComponent]
})
export class DesktopComponent {
  appList = inject(AppListService).getApps();
  openAppsManagerService = inject(OpenAppsManagerService);
  openApps = this.openAppsManagerService.openApps;

}

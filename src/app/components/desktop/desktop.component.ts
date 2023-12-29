import { Component, effect, inject } from '@angular/core';
import { AppListService } from 'src/app/services/app-list.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';


@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  appList = inject(AppListService).getApps();
  openAppsManagerService = inject(OpenAppsManagerService);
  openApps = this.openAppsManagerService.openApps;

}

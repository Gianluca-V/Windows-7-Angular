import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListService } from 'src/app/services/app-list.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';

@Component({
  selector: 'app-start-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  appListService = inject(AppListService);
  appList = this.appListService.getApps();

  openAppsManagerService = inject(OpenAppsManagerService);

}

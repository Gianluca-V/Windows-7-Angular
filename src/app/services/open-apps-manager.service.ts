import { Injectable, Inject, effect } from '@angular/core';
import { signal } from '@angular/core';
import { TestAppComponent } from '../components/apps/test-app/test-app.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAppsManagerService {

  public static instance: OpenAppsManagerService = new OpenAppsManagerService();

  private openAppsSignal = signal<any[]>([]);

  public openApps = this.openAppsSignal.asReadonly();

  public addApp(app: any) {
    const id: number = this.openAppsSignal().length;
    this.openAppsSignal.update((prev: any) => [...prev, {
      id: id,
      appContent: app
    }]); // Use set to update the signal
  }

  public closeApp(app: any) {
    this.openAppsSignal.update((prev: any[]) => [...prev.filter(a => a.id !== app.id)]); // Use set to update the signal
  }

}


import { Injectable, Inject, effect } from '@angular/core';
import { signal } from '@angular/core';
import { TestAppComponent } from '../components/apps/test-app/test-app.component';
import { WindowState } from '../components/window/window.component';

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
      state:"open",
      appContent: app
    }]); // Use set to update the signal
  }

  public changeAppState(id:number,state:WindowState){
    this.openAppsSignal.update((prev: any[]) => prev.map(app => (app.id === id ? { ...app, state } : app)))
  }
  public getAppState(id:number){
    return this.openAppsSignal().find(x => x.id === id).state; 
  }

  public closeApp(app: any) {
    this.openAppsSignal.update((prev: any[]) => [...prev.filter(a => a.id !== app.id)]); // Use set to update the signal
  }

}
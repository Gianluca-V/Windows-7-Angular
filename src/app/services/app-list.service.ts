import { Injectable, Type } from '@angular/core';
import { TestAppComponent } from '../components/apps/test-app/test-app.component';
import { LeverWariorsAppComponent } from '../components/apps/lever-wariors-app/lever-wariors-app.component';

@Injectable({
  providedIn: 'root'
})
export class AppListService {

  getApps() {
    return [
      {
        component: LeverWariorsAppComponent,
        inputs: { title:"LeverWarriors",icon:"lever-warriors-icon.png" },
      },
      {
        component: TestAppComponent,
        inputs: { title:"TestApp1",icon:"defaultIcon.png" },
      },
      {
        component: TestAppComponent,
        inputs: { title:"TestApp2",icon:"defaultIcon.png" },
      },
      {
        component: TestAppComponent,
        inputs: { title:"TestApp3",icon:"defaultIcon.png" },
      },
    ] as {component: Type<any>, inputs: Record<string, string>}[];
  }
}

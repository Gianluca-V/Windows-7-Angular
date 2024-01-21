import { Injectable, Type } from '@angular/core';
import { TestAppComponent } from '../components/apps/test-app/test-app.component';
import { LeverWariorsAppComponent } from '../components/apps/lever-wariors-app/lever-wariors-app.component';
import { CalculatorAppComponent } from '../components/apps/calculator-app/calculator-app.component';
import { NotepadAppComponent } from '../components/apps/notepad-app/notepad-app.component';

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
        component: CalculatorAppComponent,
        inputs: { title:"Calculator",icon:"calculator-icon.png" },
      },
      {
        component: NotepadAppComponent,
        inputs: { title:"Notepad",icon:"Notepad-icon.webp" },
      },
    ] as {component: Type<any>, inputs: Record<string, string>}[];
  }
}

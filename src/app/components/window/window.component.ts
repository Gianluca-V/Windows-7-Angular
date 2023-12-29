import { Component, Input, OnInit, inject} from '@angular/core';
import { AppListService } from 'src/app/services/app-list.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  @Input() app:any;
  openAppsManagerService = inject(OpenAppsManagerService);

  get getApp(){
    return this.app;
  }

  ngOnInit(): void {
    Draggable.create("#window")
  }
  
  closeApp(){
    this.openAppsManagerService.closeApp(this.app);
  }

}

import { Component, Input, AfterViewInit, inject, signal, computed, AfterViewChecked} from '@angular/core';
import { AppListService } from 'src/app/services/app-list.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ResizeService } from 'src/app/services/resize.service';
import { DragService } from 'src/app/services/drag.service';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { ZindexManagerService } from 'src/app/services/zindex-manager.service';
gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  imports:[
    NgClass,
    NgComponentOutlet
  ],
  standalone:true
})
export class WindowComponent implements AfterViewInit, AfterViewChecked {
  @Input() app:any;
  @Input() windowId:string = "";
  resizable = true;
  openAppsManagerService = inject(OpenAppsManagerService);
  zindexManagarService = inject(ZindexManagerService)
  resizeService = inject(ResizeService);
  dragService = inject(DragService);

  get getApp(){
    return this.app;
  }

  
  
  ngAfterViewInit(): void {
    this.resizeService.makeResizableDiv(`#${this.windowId}`);
    this.dragService.makeDraggableDivWithTarget(`#${this.windowId}`,".window__header");
    document.querySelector(`#${this.windowId}`)?.addEventListener("mousedown",this.changeZIndex)
  }
  
  ngAfterViewChecked(): void{
    if(this.openAppsManagerService.getAppState(this.app.id) === "open" && !this.resizable){
      this.resizeService.makeResizableDiv(`#${this.windowId}`);
      this.resizable = true;
    }
  }

  maximizeApp(){
    if(this.openAppsManagerService.getAppState(this.app.id) === "maximized"){
      this.openAppsManagerService.changeAppState(this.app.id, "open");
      return;
    }
    this.resizable = false;
    this.openAppsManagerService.changeAppState(this.app.id, "maximized");
    this.changeZIndex()
  }

  minimizeApp(){
    this.resizable = false;
    this.openAppsManagerService.changeAppState(this.app.id, "minimized");
  }
  
  closeApp(){
    this.openAppsManagerService.closeApp(this.app);
  }

  changeZIndex(){
    this.zindexManagarService.updateZIndex(`#window-${this.app.id}`);
  }
}

export type WindowState = 'minimized' | 'maximized' | 'open';

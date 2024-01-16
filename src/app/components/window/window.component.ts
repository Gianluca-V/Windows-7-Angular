import { Component, Input, AfterViewInit, inject, signal, computed, AfterViewChecked} from '@angular/core';
import { AppListService } from 'src/app/services/app-list.service';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ResizeService } from 'src/app/services/resize.service';
import { DragService } from 'src/app/services/drag.service';
gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit, AfterViewChecked {
  @Input() app:any;
  @Input() windowId:string = "";
  state = signal<WindowState>("open");
  resizable = true;
  openAppsManagerService = inject(OpenAppsManagerService);
  resizeService = inject(ResizeService);
  dragService = inject(DragService);

  get getApp(){
    return this.app;
  }

  
  ngAfterViewInit(): void {
    //Draggable.create("#window")
    this.resizeService.makeResizableDiv(`#${this.windowId}`);
    this.dragService.makeDraggableDivWithTarget(`#${this.windowId}`,".window__header");
    const window:HTMLElement = document.querySelector(`#${this.windowId}`)!;
  }
  
  ngAfterViewChecked(): void{
    if(this.state() === "open" && !this.resizable){
      console.log("TEST: "+`#${this.windowId}`)
      this.resizeService.makeResizableDiv(`#${this.windowId}`);
      this.resizable = true;
    }
  }


  maximizeApp(){
    if(this.state() === "maximized"){
      this.state.set("open")
      return;
    }
    this.state.set("maximized");
    this.resizable = false;
  }

  minimizeApp(){
    this.state.set("minimized")
    this.resizable = false;
  }
  
  closeApp(){
    this.openAppsManagerService.closeApp(this.app);
  }

}
type WindowState = 'minimized' | 'maximized' | 'open';

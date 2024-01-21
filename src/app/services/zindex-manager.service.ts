import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZindexManagerService {
  top:number = 1;

  updateZIndex(div:string){
    const window:HTMLElement = document.querySelector(div)!;
    if(window.style.zIndex !== this.top.toString()){
      window.style.zIndex = (this.top++).toString();
    }
  }
}

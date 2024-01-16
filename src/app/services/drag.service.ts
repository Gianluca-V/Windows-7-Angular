import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  constructor() { }
  makeDraggableDiv(Div: string) {
    const draggable: HTMLElement = document.querySelector(Div)!;

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    draggable.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseDown(e: any) {
      e.preventDefault();
      posX = e.clientX - draggable.offsetLeft;
      posY = e.clientY - draggable.offsetTop;
      window.addEventListener('mousemove', moveElement, false);
    }

    function mouseUp() {
      window.removeEventListener('mousemove', moveElement, false);
    }

    function moveElement(e: any) {
      mouseX = e.clientX - posX;
      mouseY = e.clientY - posY;
      draggable.style.left = mouseX + 'px';
      draggable.style.top = mouseY + 'px';
    }
  }

  makeDraggableDivWithTarget(Div: string, Target:string){
    const draggable: HTMLElement = document.querySelector(Div)!;
    const target:HTMLElement = draggable.querySelector(Target)!;

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let prevWidth:number;
    let prevHeight:number;

    target.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseDown(e: any) {
      e.preventDefault();
      posX = e.clientX - draggable.offsetLeft;
      posY = e.clientY - draggable.offsetTop;
      prevWidth = draggable.offsetWidth;
      prevHeight = draggable.offsetHeight;
      window.addEventListener('mousemove', moveElement, false);
    }

    function mouseUp() {
      window.removeEventListener('mousemove', moveElement, false);
    }

    function moveElement(e: any) {
      mouseX = e.clientX - posX;
      mouseY = e.clientY - posY;
      draggable.style.width = prevWidth + 'px';
      draggable.style.height = prevHeight + 'px';
      draggable.style.left = mouseX + 'px';
      draggable.style.top = mouseY + 'px';
    }
  }
}

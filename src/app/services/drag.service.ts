import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  constructor() { }
  makeDraggableDiv(div: string) {
    const draggable: HTMLElement = document.querySelector(div)!;

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
}

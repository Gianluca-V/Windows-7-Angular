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

    draggable.addEventListener('mousedown', startDrag, false);
    draggable.addEventListener('touchstart', startDrag, false);
    window.addEventListener('mouseup', endDrag, false);
    window.addEventListener('touchend', endDrag, false);  

    function startDrag(e: any) {
      e.preventDefault();
      posX = (e.clientX || e.touches[0].clientX) - draggable.offsetLeft;
      posY = (e.clientY || e.touches[0].clientY) - draggable.offsetTop;
      window.addEventListener('mousemove', moveElement, false);
        window.addEventListener('touchmove', moveElement, false)
    }

    function endDrag() {
      window.removeEventListener('mousemove', moveElement, false);
        window.removeEventListener('touchmove', moveElement, false);
    }

    function moveElement(e: any) {
      mouseX = (e.clientX || e.touches[0].clientX) - posX;
      mouseY = (e.clientY || e.touches[0].clientY) - posY;
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

    target.addEventListener('mousedown', startDrag, false);
    target.addEventListener('touchstart', startDrag, false);
    window.addEventListener('mouseup', endDrag, false);
    window.addEventListener('touchend', endDrag, false);

    function startDrag(e: any) {
      e.preventDefault();
      posX = (e.clientX || e.touches[0].clientX) - draggable.offsetLeft;
      posY = (e.clientY || e.touches[0].clientY) - draggable.offsetTop;
      prevWidth = draggable.offsetWidth;
      prevHeight = draggable.offsetHeight;
      window.addEventListener('mousemove', moveElement, false);
      window.addEventListener('touchmove', moveElement, false);
    }

    function endDrag() {
      window.removeEventListener('mousemove', moveElement, false);
      window.removeEventListener('touchmove', moveElement, false);
    }

    function moveElement(e: any) {
      mouseX = (e.clientX || e.touches[0].clientX) - posX;
      mouseY = (e.clientY || e.touches[0].clientY) - posY;
      draggable.style.width = prevWidth + 'px';
      draggable.style.height = prevHeight + 'px';
      draggable.style.left = mouseX + 'px';
      draggable.style.top = mouseY + 'px';
    }
  }
}

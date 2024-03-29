import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  constructor() { }
  makeResizableDiv(div: string) {
    const element: HTMLElement = document.querySelector(div)!;
    const resizers = document.querySelectorAll(div + ' .resizer')
    console.log(element)
    const minimum_size = 1;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0; i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('touchstart', startResize);
      currentResizer.addEventListener('mousedown', startResize)
      
      function startResize (e: any) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = (e.pageX || e.touches[0].clientX);
        original_mouse_y = (e.pageY || e.touches[0].clientY);
        window.addEventListener('mousemove', resize);
        window.addEventListener('touchmove', resize);
        window.addEventListener('mouseup', stopResize);
        window.addEventListener('touchend', stopResize);
      }

      function resize(e: any) {
        if (currentResizer.classList.contains('bottom-right')) {
          const width = original_width + ((e.pageX || e.touches[0].clientX) - original_mouse_x);
          const height = original_height + ((e.pageY || e.touches[0].clientY) - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
        }
        else if (currentResizer.classList.contains('bottom-left')) {
          const height = original_height + ((e.pageY || e.touches[0].clientY) - original_mouse_y)
          const width = original_width - ((e.pageX || e.touches[0].clientX) - original_mouse_x)
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + ((e.pageX || e.touches[0].clientX) - original_mouse_x) + 'px'
          }
        }
        else if (currentResizer.classList.contains('top-right')) {
          const width = original_width + ((e.pageX || e.touches[0].clientX) - original_mouse_x)
          const height = original_height - ((e.pageY || e.touches[0].clientY) - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + ((e.pageY || e.touches[0].clientY) - original_mouse_y) + 'px'
          }
        }
        else if (currentResizer.classList.contains('top-left')) {
          const width = original_width - ((e.pageX || e.touches[0].clientX) - original_mouse_x)
          const height = original_height - ((e.pageY || e.touches[0].clientY) - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + ((e.pageX || e.touches[0].clientX) - original_mouse_x) + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + ((e.pageY || e.touches[0].clientY) - original_mouse_y) + 'px'
          }
        }
        else if (currentResizer.classList.contains('right')) {
          const width = original_width + ((e.pageX || e.touches[0].clientX) - original_mouse_x)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
        }
        else if (currentResizer.classList.contains('left')) {
          const width = original_width - ((e.pageX || e.touches[0].clientX) - original_mouse_x)
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + ((e.pageX || e.touches[0].clientX) - original_mouse_x) + 'px'
          }
        }
        else if (currentResizer.classList.contains('top')) {
          const height = original_height - ((e.pageY || e.touches[0].clientY) - original_mouse_y)
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + ((e.pageY || e.touches[0].clientY) - original_mouse_y) + 'px'
          }
        }
        else if (currentResizer.classList.contains('bottom')) {
          const height = original_height + ((e.pageY || e.touches[0].clientY) - original_mouse_y)
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
        }
      }

      function stopResize() {
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('touchmove', resize);
      }
    }
  }
}

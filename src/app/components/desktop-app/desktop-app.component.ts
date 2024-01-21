import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';
import { OpenAppsManagerService } from 'src/app/services/open-apps-manager.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-desktop-app',
  templateUrl: './desktop-app.component.html',
  styleUrls: ['./desktop-app.component.scss'],
  imports: [NgClass],
  standalone: true
})
export class DesktopAppComponent {
  constructor(private el: ElementRef) { }
  openAppsManagerService = inject(OpenAppsManagerService);

  @Input() app: any;
  isSelected: boolean = false;

  selectApp() {
    this.isSelected = true;
  }

  touchTime = 0;
  clickManager() {
    this.selectApp();


    if (this.touchTime == 0) {
      // set first click
      this.touchTime = new Date().getTime();
    } else {
      // compare first click to this click and see if they occurred within double click threshold
      if (((new Date().getTime()) - this.touchTime) < 500) {
        // double click occurred
        this.open(this.app);
        this.touchTime = 0;
      } else {
        // not a double click so set as a new first click
        this.touchTime = new Date().getTime();
      }
    }
  }

  open(app: any) {
    console.log(app)
    this.openAppsManagerService.addApp(app);
  }

  // Method to handle document click events
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Check if the click is outside the app
    if (!this.el.nativeElement.contains(event.target)) {
      this.isSelected = false;
    }
  }
}

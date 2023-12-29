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
  constructor(private el: ElementRef){}
  openAppsManagerService = inject(OpenAppsManagerService);

  @Input() app:any;
  isSelected: boolean = false;

  selectApp() {
    this.isSelected = true;
  }

  
  open(app:any){
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

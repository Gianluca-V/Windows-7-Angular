import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { WindowComponent } from './components/window/window.component';
import { DesktopAppComponent } from './components/desktop-app/desktop-app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { provideHttpClient } from '@angular/common/http';
import { ViewContainerRef } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskbarComponent,
    DesktopAppComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

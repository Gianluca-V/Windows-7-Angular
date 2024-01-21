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
import { TaskbarOpenAppsComponent } from './components/taskbar-open-apps/taskbar-open-apps.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskbarComponent,
    DesktopAppComponent,
    WindowComponent,
    DesktopComponent,
    TaskbarOpenAppsComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

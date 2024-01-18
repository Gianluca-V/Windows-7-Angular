import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private static updateIntervalMs = 1000; // Update every second
  private _currentDate = signal<string>("");
  private _currentTime = signal<string>("");
  public currentDate = this._currentDate.asReadonly();
  public currentTime = this._currentTime.asReadonly();

  constructor() {
    this.updateDateTime();
    this.startAutoUpdate();
  }

  private updateDateTime() {
    const today = new Date();
    this._currentDate.set(this.formatDate(today));
    this._currentTime.set(this.formatTime(today));
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  private startAutoUpdate() {
    // Update date and time every second
    setInterval(() => {
      this.updateDateTime();
    }, DateTimeService.updateIntervalMs);
  }
}

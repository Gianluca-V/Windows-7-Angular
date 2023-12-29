import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAppComponent } from './desktop-app.component';

describe('DesktopAppComponent', () => {
  let component: DesktopAppComponent;
  let fixture: ComponentFixture<DesktopAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopAppComponent]
    });
    fixture = TestBed.createComponent(DesktopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

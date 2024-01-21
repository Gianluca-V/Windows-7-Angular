import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarOpenAppsComponent } from './taskbar-open-apps.component';

describe('TaskbarOpenAppsComponent', () => {
  let component: TaskbarOpenAppsComponent;
  let fixture: ComponentFixture<TaskbarOpenAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarOpenAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskbarOpenAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

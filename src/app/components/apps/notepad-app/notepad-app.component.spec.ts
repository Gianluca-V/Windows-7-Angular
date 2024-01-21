import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadAppComponent } from './notepad-app.component';

describe('NotepadAppComponent', () => {
  let component: NotepadAppComponent;
  let fixture: ComponentFixture<NotepadAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotepadAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotepadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

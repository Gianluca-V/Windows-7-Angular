import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverWariorsAppComponent } from './lever-wariors-app.component';

describe('LeverWariorsAppComponent', () => {
  let component: LeverWariorsAppComponent;
  let fixture: ComponentFixture<LeverWariorsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeverWariorsAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeverWariorsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

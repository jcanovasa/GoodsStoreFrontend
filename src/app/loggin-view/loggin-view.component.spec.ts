import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginViewComponent } from './loggin-view.component';

describe('LogginViewComponent', () => {
  let component: LogginViewComponent;
  let fixture: ComponentFixture<LogginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

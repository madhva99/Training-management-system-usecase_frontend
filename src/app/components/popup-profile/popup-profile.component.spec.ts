import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProfileComponent } from './popup-profile.component';

describe('PopupProfileComponent', () => {
  let component: PopupProfileComponent;
  let fixture: ComponentFixture<PopupProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

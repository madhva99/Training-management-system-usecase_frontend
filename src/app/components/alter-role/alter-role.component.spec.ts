import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterRoleComponent } from './alter-role.component';

describe('AlterRoleComponent', () => {
  let component: AlterRoleComponent;
  let fixture: ComponentFixture<AlterRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

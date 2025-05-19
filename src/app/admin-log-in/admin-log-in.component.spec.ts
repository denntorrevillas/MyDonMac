import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogInComponent } from './admin-log-in.component';

describe('AdminLogInComponent', () => {
  let component: AdminLogInComponent;
  let fixture: ComponentFixture<AdminLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLogInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

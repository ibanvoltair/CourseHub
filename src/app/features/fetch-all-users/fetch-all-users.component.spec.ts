import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllUsersComponent } from './fetch-all-users.component';

describe('FetchAllUsersComponent', () => {
  let component: FetchAllUsersComponent;
  let fixture: ComponentFixture<FetchAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchAllUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

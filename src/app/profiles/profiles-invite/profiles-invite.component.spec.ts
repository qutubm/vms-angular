import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesInviteComponent } from './profiles-invite.component';

describe('ProfilesInviteComponent', () => {
  let component: ProfilesInviteComponent;
  let fixture: ComponentFixture<ProfilesInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

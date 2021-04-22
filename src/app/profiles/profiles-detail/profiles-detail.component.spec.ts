import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDetailComponent } from './profiles-detail.component';

describe('ProfilesDetailComponent', () => {
  let component: ProfilesDetailComponent;
  let fixture: ComponentFixture<ProfilesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskDeleteComponent } from './project-task-delete.component';

describe('ProjectTaskDeleteComponent', () => {
  let component: ProjectTaskDeleteComponent;
  let fixture: ComponentFixture<ProjectTaskDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTaskDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTaskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

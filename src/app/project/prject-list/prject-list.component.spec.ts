import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjectListComponent } from './prject-list.component';

describe('PrjectListComponent', () => {
  let component: PrjectListComponent;
  let fixture: ComponentFixture<PrjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

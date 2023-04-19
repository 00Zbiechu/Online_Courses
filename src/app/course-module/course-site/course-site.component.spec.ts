import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSiteComponent } from './course-site.component';

describe('CourseSiteComponent', () => {
  let component: CourseSiteComponent;
  let fixture: ComponentFixture<CourseSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

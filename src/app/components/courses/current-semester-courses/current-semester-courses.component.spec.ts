import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSemesterCoursesComponent } from './current-semester-courses.component';

describe('CurrentSemesterCoursesComponent', () => {
  let component: CurrentSemesterCoursesComponent;
  let fixture: ComponentFixture<CurrentSemesterCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSemesterCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSemesterCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

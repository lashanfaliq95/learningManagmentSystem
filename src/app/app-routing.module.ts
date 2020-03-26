import { SelectSemesterComponent } from "./select-semester/select-semester.component";
import { SelectionMenuComponent } from "./components/selection-menu/selection-menu.component";
import { LoginComponent } from "./components/login/login.component";
import { DegreesComponent } from "./components/degrees/degrees.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MajorsComponent } from "./components/majors/majors.component";
import { EligibleCoursesComponent } from "./components/courses/eligible-courses/eligible-courses.component";
import { PrerequisiteCoursesComponent } from "./components/courses/prerequisite-courses/prerequisite-courses.component";
import { SemesterMapComponent } from "./components/semester-map/semester-map.component";
import { CoursesInFallSemesterComponent } from "./components/courses/courses-in-fall-semester/courses-in-fall-semester.component";
import { CoursesInSpringSemesterComponent } from "./components/courses/courses-in-spring-semester/courses-in-spring-semester.component";
import { RegisterStudentComponent } from "./components/register-student/register-student.component";
import { CompletedAndRemainingCoursesComponent } from "./components/completed-and-remaining-courses/completed-and-remaining-courses.component";
import { SummaryOfCoursesComponent } from "./components/courses/summary-of-courses/summary-of-courses.component";
import { AdvisorSubstituteSelectionComponent } from "./components/advisor-substitute-selection/advisor-substitute-selection.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "degrees",
    component: DegreesComponent
  },
  {
    path: "majors",
    component: MajorsComponent
  },
  {
    path: "selection",
    component: SelectionMenuComponent
  },
  {
    path: "eligibleCourses",
    component: EligibleCoursesComponent
  },
  {
    path: "prerequisiteCourses",
    component: PrerequisiteCoursesComponent
  },
  {
    path: "semesterMap",
    component: SemesterMapComponent
  },
  {
    path: "fallSemesterCourses",
    component: CoursesInFallSemesterComponent
  },
  {
    path: "springSemesterCourses",
    component: CoursesInSpringSemesterComponent
  },
  {
    path: "registerStudent",
    component: RegisterStudentComponent
  },
  {
    path: "completedAndRemainingCourses",
    component: CompletedAndRemainingCoursesComponent
  },
  {
    path: "summaryOfComponents",
    component: SummaryOfCoursesComponent
  },
  {
    path: "substituteCourses",
    component: AdvisorSubstituteSelectionComponent
  },
  {
    path: "selectSemester",
    component: SelectSemesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

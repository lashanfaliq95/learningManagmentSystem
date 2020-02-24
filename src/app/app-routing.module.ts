import { SelectionMenuComponent } from "./components/selection-menu/selection-menu.component";
import { LoginComponent } from "./components/login/login.component";
import { DegreesComponent } from "./components/degrees/degrees.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorsComponent } from "./components/majors/majors.component";
import { CompletedCoursesComponent } from "./components/courses/completed-courses/completed-courses.component";
import { EligibleCoursesComponent } from "./components/courses/eligible-courses/eligible-courses.component";
import { PrerequisiteCoursesComponent } from "./components/courses/prerequisite-courses/prerequisite-courses.component";
import { RegisterCoursesComponent } from "./components/courses/register-courses/register-courses.component";
import { CurrentSemesterCoursesComponent } from "./components/courses/current-semester-courses/current-semester-courses.component";
import { SemesterMapComponent } from "./components/semester-map/semester-map.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'degrees', component: DegreesComponent },
  { path: 'majors', component: MajorsComponent },
  { path: 'selection', component: SelectionMenuComponent },
  { path: 'completedCourses', component: CompletedCoursesComponent },
  { path: 'eligibleCourses', component: EligibleCoursesComponent },
  { path: 'prerequisiteCourses', component: PrerequisiteCoursesComponent },
  { path: 'registerCourses', component: RegisterCoursesComponent },
  { path: 'currentSemesterCourses', component: CurrentSemesterCoursesComponent },
  { path: 'semesterMap', component: SemesterMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

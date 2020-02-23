import { SelectionMenuComponent } from './selection-menu/selection-menu.component';
import { LoginComponent } from './login/login.component';
import { DegreesComponent } from './degrees/degrees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorsComponent } from './majors/majors.component';
import { CompletedCoursesComponent } from './courses/completed-courses/completed-courses.component'
import { EligibleCoursesComponent } from './courses/eligible-courses/eligible-courses.component';
import { PrerequisiteCoursesComponent } from './courses/prerequisite-courses/prerequisite-courses.component';
import { RegisterCoursesComponent } from './courses/register-courses/register-courses.component';
import { CurrentSemesterCoursesComponent } from './courses/current-semester-courses/current-semester-courses.component';
import { SemesterMapComponent } from './semester-map/semester-map.component';

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

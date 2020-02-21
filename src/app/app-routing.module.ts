import { SelectionMenuComponent } from './selection-menu/selection-menu.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { DegreesComponent } from './degrees/degrees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorsComponent } from './majors/majors.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'degrees', component: DegreesComponent },
  { path: 'majors', component: MajorsComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'selection', component: SelectionMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

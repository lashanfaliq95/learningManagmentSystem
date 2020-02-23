import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DegreesComponent } from './degrees/degrees.component';
import { CourseComponent } from './courses/course/course.component';
import { MajorsComponent } from './majors/majors.component';
import { SelectionMenuComponent } from './selection-menu/selection-menu.component';
import { EligibleCoursesComponent } from './courses/eligible-courses/eligible-courses.component';
import { CompletedCoursesComponent } from './courses/completed-courses/completed-courses.component';
import { PrerequisiteCoursesComponent } from './courses/prerequisite-courses/prerequisite-courses.component';
import { RegisterCoursesComponent } from './courses/register-courses/register-courses.component';
import { CurrentSemesterCoursesComponent } from './courses/current-semester-courses/current-semester-courses.component';
import { SemesterMapComponent } from './semester-map/semester-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    NavbarComponent,
    DegreesComponent,
    CourseComponent,
    MajorsComponent,
    SelectionMenuComponent,
    EligibleCoursesComponent,
    CompletedCoursesComponent,
    PrerequisiteCoursesComponent,
    RegisterCoursesComponent,
    CurrentSemesterCoursesComponent,
    SemesterMapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

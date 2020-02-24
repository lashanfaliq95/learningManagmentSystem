import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DegreesComponent } from "./components/degrees/degrees.component";
import { CourseComponent } from "./components/courses/course/course.component";
import { MajorsComponent } from "./components/majors/majors.component";
import { SelectionMenuComponent } from "./components/selection-menu/selection-menu.component";
import { EligibleCoursesComponent } from "./components/courses/eligible-courses/eligible-courses.component";
import { CompletedCoursesComponent } from "./components/courses/completed-courses/completed-courses.component";
import { PrerequisiteCoursesComponent } from "./components/courses/prerequisite-courses/prerequisite-courses.component";
import { RegisterCoursesComponent } from "./components/courses/register-courses/register-courses.component";
import { CurrentSemesterCoursesComponent } from "./components/courses/current-semester-courses/current-semester-courses.component";
import { SemesterMapComponent } from "./components/semester-map/semester-map.component";

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
    SemesterMapComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

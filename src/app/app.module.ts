import { CoursesService } from "./services/courses.service";
import { UserService } from "./services/user.service";
import { DegreeService } from "./services/degree.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { SemesterMapComponent } from "./components/semester-map/semester-map.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterableCourseComponent } from "./components/courses/registerable-course/registerable-course.component";
import { PrerequisiteCourseComponent } from "./components/courses/prerequisite-course/prerequisite-course.component";
import { CoursesInFallSemesterComponent } from "./components/courses/courses-in-fall-semester/courses-in-fall-semester.component";
import { CoursesInSpringSemesterComponent } from "./components/courses/courses-in-spring-semester/courses-in-spring-semester.component";

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
    SemesterMapComponent,
    RegisterableCourseComponent,
    PrerequisiteCourseComponent,
    CoursesInFallSemesterComponent,
    CoursesInSpringSemesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DegreeService, UserService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

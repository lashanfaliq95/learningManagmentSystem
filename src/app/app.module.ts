import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DegreesComponent } from './degrees/degrees.component';
import { CourseComponent } from './course/course.component';
import { MajorsComponent } from './majors/majors.component';
import { SelectionMenuComponent } from './selection-menu/selection-menu.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, CoursesComponent, NavbarComponent,  DegreesComponent, CourseComponent, MajorsComponent, SelectionMenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

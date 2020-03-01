import { CoursesService } from "./../../../services/courses.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-register-courses",
  templateUrl: "./register-courses.component.html",
  styleUrls: ["./register-courses.component.scss"]
})
export class RegisterCoursesComponent implements OnInit {
  courses;
  title;

  constructor(
    private userService: UserService,
    private coursesService: CoursesService
  ) {
    
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCompletedCourses();
    const userName = this.userService.getUser().name || "student";
    const semester = this.userService.getUser().semester || "semester";

    this.title =
      "Welcome " +
      userName +
      ". The following are the courses offered during the " +
      semester;
  }
}

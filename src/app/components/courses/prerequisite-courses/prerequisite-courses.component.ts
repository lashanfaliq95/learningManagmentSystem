import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-prerequisite-courses",
  templateUrl: "./prerequisite-courses.component.html",
  styleUrls: ["./prerequisite-courses.component.scss"]
})
export class PrerequisiteCoursesComponent implements OnInit {
  courses;
  title;

  constructor(
    private userService: UserService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getPrerequisiteCourses();
    const userName = this.userService.getUser().name || "student";

    this.title =
      "Welcome " +
      userName +
      ". The following are the prerequisite for you degree.";
  }
}

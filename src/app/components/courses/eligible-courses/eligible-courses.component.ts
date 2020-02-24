import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-eligible-courses",
  templateUrl: "./eligible-courses.component.html",
  styleUrls: ["./eligible-courses.component.scss"]
})
export class EligibleCoursesComponent implements OnInit {
  courses;
  title;

  constructor(
    private userService: UserService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getEligibleCourses();
    const userName = this.userService.getUser().name || "student";

    this.title =
      "Welcome " +
      userName +
      ". The following are the eligible courses that can take on this semester.";
  }
}

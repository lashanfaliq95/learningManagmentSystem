import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-courses-in-spring-semester",
  templateUrl: "./courses-in-spring-semester.component.html",
  styleUrls: ["./courses-in-spring-semester.component.scss"]
})
export class CoursesInSpringSemesterComponent implements OnInit {
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
      ". The following are the courses offered during the Spring semester.";
  }
}

import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "courses-in-fall-semester",
  templateUrl: "./courses-in-fall-semester.component.html",
  styleUrls: ["./courses-in-fall-semester.component.scss"]
})
export class CoursesInFallSemesterComponent implements OnInit {
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
      ". The following are the courses offered during the Fall semester.";
  }
}

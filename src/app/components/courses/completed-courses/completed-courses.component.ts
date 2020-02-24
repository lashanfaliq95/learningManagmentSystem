import { CoursesService } from "./../../../services/courses.service";
import { DegreeService } from "./../../../services/degree.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-completed-courses",
  templateUrl: "./completed-courses.component.html",
  styleUrls: ["./completed-courses.component.scss"]
})
export class CompletedCoursesComponent implements OnInit {
  courses;
  title;

  constructor(
    private userService: UserService,
    private degreeService: DegreeService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCompletedCourses();
    const userName = this.userService.getUser().name || "student";
    const degreeName = this.degreeService.getCurrentDegree().name || "degree";

    this.title =
      "Welcome " +
      userName +
      ". These are that courses that you have completed under " +
      degreeName +
      " so far.";
  }
}

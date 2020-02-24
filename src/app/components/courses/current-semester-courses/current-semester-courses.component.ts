import { CoursesService } from "./../../../services/courses.service";
import { DegreeService } from "./../../../services/degree.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-current-semester-courses",
  templateUrl: "./current-semester-courses.component.html",
  styleUrls: ["./current-semester-courses.component.scss"]
})
export class CurrentSemesterCoursesComponent implements OnInit {
  courses;
  title;

  constructor(
    private userService: UserService,
    private coursesService: CoursesService
  ) {}

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

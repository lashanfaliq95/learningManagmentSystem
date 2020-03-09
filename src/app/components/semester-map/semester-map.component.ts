import { CoursesService } from "./../../services/courses.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";

@Component({
  selector: "app-semester-map",
  templateUrl: "./semester-map.component.html",
  styleUrls: ["./semester-map.component.scss"]
})
export class SemesterMapComponent implements OnInit {
  title;
  semesterCourses;

  constructor(
    private userService: UserService,
    private router: Router,
    private coursesService: CoursesService
  ) {
    this.coursesService
      .updateSemesterCourses()
      .subscribe(courses => (this.semesterCourses = courses));
  }

  ngOnInit(): void {
    const userName = this.userService.getUser().name || "student";
    this.title =
      "Welcome " + userName + ". The following is the map of your semesters.";
  }

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }

  onClickData(semester) {
    this.coursesService.getCoursesForSemester(semester);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CoursesService } from "./../../services/courses.service";
import { DegreeService } from "./../../services/degree.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-summary-of-courses",
  templateUrl: "./summary-of-courses.component.html",
  styleUrls: ["./summary-of-courses.component.scss"]
})
export class SummaryOfCoursesComponent implements OnInit {
  currentDegree;
  allCourses;
  constructor(
    private router: Router,
    private degreeService: DegreeService,
    private courseService: CoursesService,
    private userService: UserService
  ) {
    const student = this.userService.getUser();
    if (!student) {
      this.router.navigate(["/"]);
    } else {
      this.courseService
        .updateAllCourses()
        .subscribe(courses => (this.allCourses = courses));
    }
  }

  ngOnInit(): void {
    this.currentDegree = this.degreeService.getCurrentDegree();
    this.courseService.getAllCourses();
  }

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }
}

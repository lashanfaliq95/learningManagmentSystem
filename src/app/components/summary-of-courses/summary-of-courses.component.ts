import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CoursesService } from "./../../services/courses.service";
import { DegreeService } from "./../../services/degree.service";

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
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.currentDegree = this.degreeService.getCurrentDegree();
    this.allCourses = this.courseService.getAllCourses();
    console.log(this.currentDegree);
  }

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }
}

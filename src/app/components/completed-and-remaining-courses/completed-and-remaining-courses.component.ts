import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: "app-completed-and-remaining-courses",
  templateUrl: "./completed-and-remaining-courses.component.html",
  styleUrls: ["./completed-and-remaining-courses.component.scss"]
})
export class CompletedAndRemainingCoursesComponent implements OnInit {
  title;
  completedCourses;
  remainingCourses;

  constructor(
    private userService: UserService,
    private coursesService: CoursesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.completedCourses = this.coursesService.getEligibleCourses();
    this.remainingCourses = this.coursesService.getEligibleCourses();

    const userName = this.userService.getUser().name || "student";

    this.title =
      "Welcome " + userName + ".  The following is how your status looks like.";
  }

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }
}

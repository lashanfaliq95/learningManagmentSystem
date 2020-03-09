import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

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
    private coursesService: CoursesService,
    private router: Router
  ) {
    const student = this.userService.getUser();
    if (!student) {
      this.router.navigate(["/"]);
    } else {
      this.coursesService
        .updateEligibleCourses()
        .subscribe(courses => (this.courses = courses));
      this.title =
        "Welcome " +
        student.email +
        ". The following are the eligible courses that can take on this semester.";
    }
  }

  ngOnInit(): void {
    this.coursesService.getEligibleCourses();
  }
}

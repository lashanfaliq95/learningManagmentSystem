import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

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
    private coursesService: CoursesService,
    private router: Router
  ) {
    const student = this.userService.getUser();
    if (!student) {
      this.router.navigate(["/"]);
    } else {
      this.coursesService
        .updateFallCourses()
        .subscribe(courses => (this.courses = courses));
      this.title =
        "Welcome " +
        student.name +
        ". The following are the courses offered during the Fall semester.";
    }
  }

  ngOnInit(): void {
    this.coursesService.getFallCourses();
  }
}

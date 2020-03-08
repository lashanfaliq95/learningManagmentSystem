import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

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
    private coursesService: CoursesService,
    private router: Router
  ) {
    const student = this.userService.getUser();
    if (!student) {
      this.router.navigate(["/"]);
    } else {
      this.coursesService
        .updateSpringCourses()
        .subscribe(courses => (this.courses = courses));
      this.title =
        "Welcome " +
        student.name +
        ". The following are the courses offered during the Spring semester.";
    }
  }

  ngOnInit(): void {
    this.coursesService.getSpringCourses();
  }
}

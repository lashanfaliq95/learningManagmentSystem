import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../../../services/courses.service";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-prerequisite-courses",
  templateUrl: "./prerequisite-courses.component.html",
  styleUrls: ["./prerequisite-courses.component.scss"]
})
export class PrerequisiteCoursesComponent implements OnInit {
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
      coursesService
        .updatePrerequisiteCourses()
        .subscribe(courses => (this.courses = courses));
      this.title =
        "Welcome " +
        student.email +
        ".  Please select a course to see its prerequisite .";
    }
  }

  ngOnInit(): void {
    this.coursesService.getPrerequisiteCourses();
  }
}

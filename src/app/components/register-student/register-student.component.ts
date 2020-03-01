import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CoursesService } from "../../services/courses.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register-student",
  templateUrl: "./register-student.component.html",
  styleUrls: ["./register-student.component.scss"]
})
export class RegisterStudentComponent implements OnInit {
  courses;
  title;

  constructor(
    private userService: UserService,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getEligibleCourses();
    const userName = this.userService.getUser().name || "student";

    this.title =
      "Welcome " + userName + ".Please type your Advisor's name and email ID.";
  }

  onContinue(form) {
    console.log(form);
    this.router.navigate(["/selection"]);
  }
}

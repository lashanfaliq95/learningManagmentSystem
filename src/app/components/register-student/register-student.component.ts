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
    const username = this.userService.getUser();
    const displayName = (username && username.name) || "student";

    this.title =
      "Welcome " + displayName + ".Please type your Advisor's email ID.";
  }

  onContinue(data) {
    this.coursesService.sendEmail(data.viewModel);
  }
}

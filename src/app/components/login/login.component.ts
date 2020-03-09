import { UserService } from "./../../services/user.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  error;
  isStudent = true;
  constructor(private router: Router, private userService: UserService) {
    this.userService.logout();
    this.userService.getError().subscribe(error => {
      this.error = error;
    });
  }

  onClickLogin({ form }) {
    this.userService.login(
      form.value.userName,
      form.value.password,
      this.isStudent
    );
  }

  onFocus() {
    this.error = false;
  }

  onClickLoginAsAdvisor() {
    this.isStudent = false;
  }

  onClickLoginAsStudent() {
    this.isStudent = true;
  }
}

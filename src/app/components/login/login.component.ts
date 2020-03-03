import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  error;
  constructor(private router: Router) {}

  onClickLogin(f) {
    console.log(f.form.value);
    if (
      f.form.value.userName === "admin" &&
      f.form.value.password === "admin"
    ) {
      this.router.navigate(["/degrees"]);
    } else {
      this.error = true;
    }
  }

  onFocus() {
    this.error = false;
  }
}

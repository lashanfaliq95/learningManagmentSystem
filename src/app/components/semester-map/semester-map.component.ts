import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";

@Component({
  selector: "app-semester-map",
  templateUrl: "./semester-map.component.html",
  styleUrls: ["./semester-map.component.scss"]
})
export class SemesterMapComponent implements OnInit {
  title;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const userName = this.userService.getUser().name || "student";
    this.title =
      "Welcome " + userName + ". The following is the map of your semesters.";
  }

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }
}

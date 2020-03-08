import { UserService } from "./../../services/user.service";
import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DegreeService } from "./../../services/degree.service";

@Component({
  selector: "degrees",
  templateUrl: "./degrees.component.html",
  styleUrls: ["./degrees.component.scss"]
})
export class DegreesComponent implements OnInit {
  @Output() degreeSelect = new EventEmitter();
  degrees;

  constructor(
    private router: Router,
    private service: DegreeService,
    private userService: UserService
  ) {
    console.log(this.degrees !== undefined);
    if (!userService.getUser()) {
      this.router.navigate(["/"]);
    } else {
      service.updateDegrees().subscribe(degrees => {
        this.degrees = degrees;
      });
    }
  }

  ngOnInit() {
    this.service.getDegrees();
  }

  onContinue({ form }) {
    const degreeId = form.value.degree;
    this.service.setCurrentDegree(degreeId);
    if (form.value.degree) {
      this.router.navigate(["/majors"]);
    }
  }
}

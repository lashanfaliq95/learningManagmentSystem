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

  constructor(private router: Router, private service: DegreeService) {}

  ngOnInit() {
    this.degrees = this.service.getDegrees();
    console.log(this.service.getDegrees);
  }

  onContinue({ form }) {
    console.log("id", form.value);
    const degreeId = form.value.degree;
    this.service.setCurrentDegree(degreeId);
    const degreeName =
      degreeId === "1" ? this.degrees[0].name : this.degrees[1].name;
    if (form.value.degree) {
      this.router.navigate(["/majors"], {
        queryParams: {
          degreeId,
          degreeName
        }
      });
    }
  }
}

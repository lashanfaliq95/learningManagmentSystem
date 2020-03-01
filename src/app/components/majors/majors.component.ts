import { MajorsService } from "./../../services/majors.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "majors",
  templateUrl: "./majors.component.html",
  styleUrls: ["./majors.component.scss"]
})
export class MajorsComponent implements OnInit {
  currentDegree;
  currentMajors;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private majorService: MajorsService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe();
    const degreeId = this.route.snapshot.queryParamMap.get("degreeId");
    this.currentDegree = this.route.snapshot.queryParamMap.get("degreeName");
    this.currentMajors = this.majorService.getMajors(degreeId);
  }

  onContinue({ form }) {
    const majorId = form.value.major;
    if (majorId) {
      this.majorService.setCurrentMajor(majorId);
      this.router.navigate(["/selection"]);
    }
  }
}

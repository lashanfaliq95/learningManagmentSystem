import { DegreeService } from "./../../services/degree.service";
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
    private majorService: MajorsService,
    private degreeService: DegreeService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe();
    this.currentDegree = this.degreeService.getCurrentDegree();
    this.currentMajors = this.majorService.getMajors(this.currentDegree.id);
  }

  onContinue({ form }) {
    const majorId = form.value.major;
    if (majorId) {
      this.majorService.setCurrentMajor(majorId);
      this.router.navigate(["/selection"]);
    }
  }
}

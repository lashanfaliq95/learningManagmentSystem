import { DegreeService } from "./../../services/degree.service";
import { MajorsService } from "./../../services/majors.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./../../services/user.service";

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
    private majorService: MajorsService,
    private degreeService: DegreeService,
    private userService: UserService
  ) {
    if (!this.userService.getUser()) {
      this.router.navigate(["/"]);
    } else {
      this.majorService
        .updateMajors()
        .subscribe(majors => (this.currentMajors = majors));
    }
  }

  ngOnInit() {
    this.currentDegree = this.degreeService.getCurrentDegree();
    this.majorService.getMajors(this.currentDegree.id);
  }

  onClickBack() {
    this.router.navigate(["/degrees"]);
  }

  onContinue({ form }) {
    const majorId = form.value.major;
    if (majorId) {
      this.majorService.setCurrentMajor(majorId);
      this.router.navigate(["/selection"]);
    }
  }
}

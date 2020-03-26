import { CoursesService } from "./../services/courses.service";
import { UserService } from "./../services/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-semester",
  templateUrl: "./select-semester.component.html",
  styleUrls: ["./select-semester.component.scss"]
})
export class SelectSemesterComponent implements OnInit {
  semesters;
  currentSemester;

  constructor(
    private service: CoursesService,
    private userService: UserService,
    private router: Router
  ) {
    if (!userService.getUser()) {
      this.router.navigate(["/"]);
    } else {
      service.updateSemesters().subscribe(semesters => {
        this.semesters = semesters;
      });
      service
        .updateCurrentSemester()
        .subscribe(currentSemester => (this.currentSemester = currentSemester));
    }
  }

  ngOnInit(): void {
    this.service.getSemesters();
  }

  onClickSemester({ number }) {
    this.service.setCurrentSemester(number);
  }

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }
}

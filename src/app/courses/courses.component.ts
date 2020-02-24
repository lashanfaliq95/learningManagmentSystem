import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent {
  @Input() courses;
  @Input() title;

  constructor(private router: Router) {}

  onClickFinish() {
    this.router.navigate(["/selection"]);
  }
}

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
  @Input() allowRegister;
  @Input() showPreRequisites;

  constructor(private router: Router) {}

  onClickFinish() {
    console.log("allowRegister", this.allowRegister);
    this.router.navigate(["/selection"]);
  }
}

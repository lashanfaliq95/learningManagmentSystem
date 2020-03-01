import { Component, Input } from "@angular/core";

@Component({
  selector: "prerequisite-course",
  templateUrl: "./prerequisite-course.component.html",
  styleUrls: ["./prerequisite-course.component.scss"]
})
export class PrerequisiteCourseComponent {
  @Input() courseId;
  @Input() courseName;
  @Input() prerequisites;
  isPreRequisitesShown = false;

  onClickCourse() {
    console.log("click");
    this.isPreRequisitesShown = !this.isPreRequisitesShown;
  }
}

import { Component, Input } from "@angular/core";

@Component({
  selector: "prerequisite-course",
  templateUrl: "./prerequisite-course.component.html",
  styleUrls: ["./prerequisite-course.component.scss"]
})
export class PrerequisiteCourseComponent {
  @Input() courseId;
  @Input() courseName;
  @Input() prerequisite;
  isPreRequisitesShown = false;

  onClickCourse() {
    this.isPreRequisitesShown = !this.isPreRequisitesShown;
  }
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "registerable-course",
  templateUrl: "./registerable-course.component.html",
  styleUrls: ["./registerable-course.component.scss"]
})
export class RegisterableCourseComponent {
  @Input() courseId;
  @Input() courseName;
  isRegisterShown = false;
  onClickCourse() {
    this.isRegisterShown = !this.isRegisterShown;
  }
}

import { CoursesService } from "./../../../services/courses.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "registerable-course",
  templateUrl: "./registerable-course.component.html",
  styleUrls: ["./registerable-course.component.scss"]
})
export class RegisterableCourseComponent {
  @Input() courseId;
  @Input() courseName;
  isRegisterShown = false;
  constructor(private courseService: CoursesService) {}

  onClickCourse() {
    this.isRegisterShown = !this.isRegisterShown;
  }

  onClickRegister() {
    this.courseService.registerCourse(this.courseId);
  }
}

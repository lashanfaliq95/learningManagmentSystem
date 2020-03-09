import { CoursesService } from "./../../services/courses.service";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-advisor-substitute-selection",
  templateUrl: "./advisor-substitute-selection.component.html",
  styleUrls: ["./advisor-substitute-selection.component.scss"]
})
export class AdvisorSubstituteSelectionComponent implements OnInit {
  students;
  courses;
  advisor;
  student;
  constructor(
    private userService: UserService,
    private courseServices: CoursesService,
    private router: Router
  ) {
    this.userService
      .updateStudents()
      .subscribe(students => (this.students = students));
  }

  ngOnInit(): void {
    this.advisor = this.userService.getUser();
    if (!this.advisor) {
      this.router.navigate(["/"]);
    } else {
      this.userService.getStudents();
      this.courseServices
        .updateStudentCourses()
        .subscribe(courses => (this.courses = courses));
    }
  }

  onClickStudent(student) {
    this.student = student.id;
    this.courseServices.getStudentCourses(student.id);
  }

  onClickRegister(id, substitute) {
    this.courseServices.substituteCourse(id, substitute, this.student);
  }
}

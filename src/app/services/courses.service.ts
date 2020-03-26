import { MajorsService } from "./majors.service";
import { UserService } from "./user.service";
import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  private url = "http://192.168.8.105:8080";
  eligibleCourses: Subject<any> = new Subject<any>();
  coursesWithPrerequisites: Subject<any> = new Subject<any>();
  springCourses: Subject<any> = new Subject<any>();
  fallCourses: Subject<any> = new Subject<any>();
  allCourses: Subject<any> = new Subject<any>();
  semesterCourses: Subject<any> = new Subject<any>();
  completedCourses: Subject<any> = new Subject<any>();
  userCourses: Subject<any> = new Subject<any>();
  substitutedCourses: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private majorService: MajorsService,
    private router: Router
  ) {}

  getEligibleCourses() {
    const userId = this.userService.getUser().id;
    const majorId = this.majorService.getCurrentMajor();
    this.http
      .get(this.url + "/" + userId + "/" + majorId + "/courses/ELIGIBLE")
      .subscribe({
        next: res => this.eligibleCourses.next(res),
        error: err => this.eligibleCourses.next(null)
      });
  }

  updateEligibleCourses() {
    return this.eligibleCourses.asObservable();
  }

  getRegisteredCourses() {
    const userId = this.userService.getUser().id;
    const majorId = this.majorService.getCurrentMajor();
    this.http
      .get(this.url + "/" + userId + "/" + majorId + "/courses/REGISTERED")
      .subscribe({
        next: res => this.completedCourses.next(res),
        error: err => this.completedCourses.next(null)
      });
  }

  updateRegisteredCourses() {
    return this.completedCourses.asObservable();
  }

  getPrerequisiteCourses() {
    const majorId = this.majorService.getCurrentMajor();

    this.http
      .get(this.url + "/" + majorId + "/courses/prerequisites")
      .subscribe({
        next: res => this.coursesWithPrerequisites.next(res),
        error: err => this.coursesWithPrerequisites.next(null)
      });
  }

  updatePrerequisiteCourses() {
    return this.coursesWithPrerequisites.asObservable();
  }

  getSpringCourses() {
    const majorId = this.majorService.getCurrentMajor();

    this.http
      .get(this.url + "/courses/" + majorId + "/season/SPRING")
      .subscribe({
        next: res => this.springCourses.next(res),
        error: err => this.springCourses.next(null)
      });
  }

  updateSpringCourses() {
    return this.springCourses.asObservable();
  }

  getFallCourses() {
    const majorId = this.majorService.getCurrentMajor();

    this.http.get(this.url + "/courses/" + majorId + "/season/FALL").subscribe({
      next: res => this.fallCourses.next(res),
      error: err => this.fallCourses.next(null)
    });
  }

  updateFallCourses() {
    return this.fallCourses.asObservable();
  }

  getAllCourses() {
    this.http.get(this.url + "/courses").subscribe({
      next: res => this.allCourses.next(res),
      error: err => this.allCourses.next(null)
    });
  }

  updateAllCourses() {
    return this.allCourses.asObservable();
  }

  registerCourse(id) {
    const userId = this.userService.getUser().id;
    this.http
      .post(this.url + "/" + userId + "/courses/apply", { id })
      .subscribe({
        next: res => {
          const data: any = res;
        },
        error: err => {
          console.error(err);
        }
      });
  }

  sendEmail(email) {
    const userId = this.userService.getUser().id;
    this.http
      .post(this.url + "/" + userId + "/register", {
        email
      })
      .subscribe({
        next: res => {
          const data: any = res;
          this.router.navigate(["/selection"]);
        },
        error: err => {
          console.error(err);
        }
      });
  }

  getCoursesForSemester(semester) {
    this.http.get(this.url + "/courses/semester/" + semester).subscribe({
      next: res => this.semesterCourses.next(res),
      error: err => this.semesterCourses.next(null)
    });
  }

  updateSemesterCourses() {
    return this.semesterCourses.asObservable();
  }

  getUserCourses() {
    const userId = this.userService.getUser().id;
    this.http.get(this.url + "/" + userId + "/courses").subscribe({
      next: res => this.userCourses.next(res),
      error: err => this.userCourses.next(null)
    });
  }

  updateUserCourses() {
    return this.userCourses.asObservable();
  }

  getStudentCourses(userId) {
    this.http.get(this.url + "/" + userId + "/courses").subscribe({
      next: res => this.userCourses.next(res),
      error: err => this.userCourses.next(null)
    });
  }

  updateStudentCourses() {
    return this.userCourses.asObservable();
  }

  substituteCourse(id, substitute, userId) {
    this.http
      .post(this.url + "/" + userId + "/substitute/" + id, {
        number: substitute
      })
      .subscribe({
        next: res => res
      });
  }
}

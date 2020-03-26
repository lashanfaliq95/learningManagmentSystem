import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url = "http://192.168.8.105:8080";
  private authenticatedUser: any;

  error: Subject<boolean> = new Subject<boolean>();
  students: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  login(email, password, isStudent) {
    const role = isStudent ? "student" : "adviser";
    const apiUrl = isStudent ? "/student/auth" : "/adviser/auth";
    this.http
      .post(this.url + apiUrl, {
        email,
        password,
        role,
        curentSemester: 1,
        authenticate: "shouldAuthenticate"
      })
      .subscribe({
        next: res => {
          const data: any = res;
          this.setUser(data);
          this.error.next(false);
          if (data.authenticate === "TRUE") {
            if (isStudent) {
              this.router.navigate(["/degrees"]);
            } else {
              this.router.navigate(["/substituteCourses"]);
            }
          }
        },
        error: err => {
          this.setUser(null);
          this.error.next(true);
        }
      });
  }

  getStudents() {
    this.http.get(this.url + "/users/students").subscribe({
      next: res => {
        const data: any = res;
        this.students.next(data);
      },
      error: err => console.error(err)
    });
  }

  updateStudents() {
    return this.students.asObservable();
  }

  logout() {
    this.authenticatedUser = null;
  }

  getUser() {
    return this.authenticatedUser;
  }

  setUser(authenticatedUser) {
    localStorage.setItem("user", authenticatedUser);
    this.authenticatedUser = authenticatedUser;
  }

  getError() {
    return this.error.asObservable();
  }
}

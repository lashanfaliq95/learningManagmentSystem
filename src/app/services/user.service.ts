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

  constructor(private http: HttpClient, private router: Router) {}

  login(email, password) {
    this.http
      .post(this.url + "/student/auth", {
        email,
        password,
        role: "student",
        curentSemester: 1,
        authenticate: "shouldAuthenticate"
      })
      .subscribe({
        next: res => {
          const data: any = res;
          this.setUser(data);
          this.error.next(false);
          if (data.authenticate === "TRUE") {
            this.router.navigate(["/degrees"]);
          }
        },
        error: err => {
          this.setUser(null);
          this.error.next(true);
        }
      });
  }

  logout() {
    this.authenticatedUser = null;
  }

  getUser() {
    return this.authenticatedUser;
  }

  setUser(authenticatedUser) {
    this.authenticatedUser = authenticatedUser;
  }

  getError() {
    return this.error.asObservable();
  }
}

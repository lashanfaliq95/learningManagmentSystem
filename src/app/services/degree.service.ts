import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DegreeService {
  private url = "http://192.168.8.105:8080";
  degrees: Subject<any> = new Subject<any>();
  private allDegrees;
  currentDegreeId;

  constructor(private http: HttpClient) {}

  getDegrees() {
    this.http.get(this.url + "/degrees").subscribe({
      next: res => {
        this.allDegrees = res;
        this.degrees.next(res);
      },
      error: err => {
        this.degrees.next(null);
      }
    });
  }

  setCurrentDegree(id) {
    this.currentDegreeId = id;
  }

  getCurrentDegree() {
    return this.allDegrees.filter(
      degree => degree.id === this.currentDegreeId
    )[0];
  }

  updateDegrees() {
    return this.degrees.asObservable();
  }
}

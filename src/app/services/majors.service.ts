import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MajorsService {
  private url = "http://192.168.8.105:8080";
  majors: Subject<any> = new Subject<any>();
  currentMajorId;

  constructor(private http: HttpClient) {}

  getMajors(degreeId) {
    this.http.get(this.url + "/specializations/" + degreeId).subscribe({
      next: res => {
        this.majors.next(res);
      },
      error: err => {
        this.majors.next(null);
      }
    });
  }

  setCurrentMajor(majorId) {
    this.currentMajorId = majorId;
  }

  getCurrentMajor() {
    return this.currentMajorId;
  }

  updateMajors() {
    return this.majors.asObservable();
  }
}

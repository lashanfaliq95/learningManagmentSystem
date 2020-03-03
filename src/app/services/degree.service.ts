import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DegreeService {
  private url = "localhost";
  degrees;
  currentDegreeId;

  constructor(private http: HttpClient) {}

  getDegrees() {
    this.degrees = [
      { id: "1", name: "BS.CSC" },
      { id: "2", name: "BS.ITE" }
    ];
    return this.degrees;
  }

  setCurrentDegree(id) {
    this.currentDegreeId = id;
  }

  getCurrentDegree() {
    return this.degrees.filter(degree => degree.id === this.currentDegreeId)[0];
  }
}

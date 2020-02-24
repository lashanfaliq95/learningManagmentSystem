import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DegreeService {
  private url = "localhost";

  constructor(private http: HttpClient) {}

  getDegrees() {
    return [
      { id: "1", name: "BS.CSC" },
      { id: "2", name: "BS.ITE" }
    ];
  }

  getCurrentDegree() {
    return { id: "1", name: "BS.CSC" };
  }
}

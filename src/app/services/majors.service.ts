import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MajorsService {
  private url = "localhost";
  currentMajorId;

  constructor(private http: HttpClient) {}

  getMajors(degreeId) {
    const majorsForCse = [
      { id: "1", name: "BS.CSC.CYBT.DNIMAS" },
      { id: "2", name: "BS.CSC.CET" }
    ];

    const majorsForIte = [
      { id: "1", name: "BS.ITE.CYBT.DNIMAS" },
      { id: "2", name: "BS.ITE.CET" }
    ];
    return degreeId === "1" ? majorsForCse : majorsForIte;
  }

  setCurrentMajor(majorId) {
    this.currentMajorId = majorId;
  }

  getCurrentMajor() {
    return this.currentMajorId;
  }
}

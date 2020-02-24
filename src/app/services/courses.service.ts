import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  private url = "localhost";
  courses = [
    {
      id: "1",
      number: "CSC 01",
      prerequsites: null,
      credits: 3,
      subustitutes: "CSS 01",
      AcademicTerm: "1",
      courseName: "Spartan summer"
    },
    {
      id: "2",
      number: "CSC 280",
      prerequsites: [
        { id: "3", name: "CSC 260" },
        { id: "4", name: "CSC 270" }
      ],
      credits: 3,
      subustitutes: "CSS 01",
      AcademicTerm: "2",
      courseName: "Applied sceience Seminar"
    }
  ];

  constructor(private http: HttpClient) {}

  getCompletedCourses() {
    return this.courses;
  }

  getEligibleCourses() {
    return this.courses;
  }

  getCurrentSemesterCourses() {
    return this.courses;
  }

  getPrerequisiteCourses() {
    return this.courses;
  }
}

import { element } from "protractor";
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
      prerequisites: null,
      credits: 3,
      Substitute: "CSS 01",
      AcademicTerm: "1",
      courseName: "Spartan summer",
      registered: true
    },
    {
      id: "2",
      number: "CSC 280",
      prerequisites: [
        { id: "3", name: "CSC 260" },
        { id: "4", name: "CSC 270" }
      ],
      credits: 3,
      Substitute: "CSS 01",
      AcademicTerm: "2",
      courseName: "Applied sceience Seminar",
      registered: true
    }
  ];

  prerequisiteCourses = [
    {
      id: "1",
      number: "CSC 01",
      prerequisites: [
        { id: "5", name: "CSC 220" },
        { id: "6", name: "CSC 230" }
      ],
      credits: 3,
      subustitutes: "CSS 01",
      AcademicTerm: "1",
      courseName: "Spartan summer"
    },
    {
      id: "2",
      number: "CSC 280",
      prerequisites: [
        { id: "3", name: "CSC 260" },
        { id: "4", name: "CSC 270" }
      ],
      credits: 3,
      subustitutes: "CSS 01",
      AcademicTerm: "2",
      courseName: "Applied sceience Seminar"
    }
  ];

  allCourses = [
    {
      id: "1",
      number: "CSC 01",
      prerequisites: null,
      credits: 3,
      Substitute: "CSS 01",
      AcademicTerm: "1",
      courseName: "Spartan summer",
      registered: true,
      eligible: false
    },
    {
      id: "2",
      number: "CSC 280",
      prerequisites: { id: "3", name: "CSC 260" },
      credits: 3,
      Substitute: "CSS 01",
      AcademicTerm: "2",
      courseName: "Applied sceience Seminar",
      registered: false,
      eligible: true
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
    return this.prerequisiteCourses;
  }

  getAllCourses() {
    return this.allCourses;
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

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

  // courses = [
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: true
  //   }
  // ];

  // prerequisiteCourses = [
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: [
  //       { id: "5", name: "CSC 220" },
  //       { id: "6", name: "CSC 230" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer"
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar"
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: [
  //       { id: "5", name: "CSC 220" },
  //       { id: "6", name: "CSC 230" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer"
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar"
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: [
  //       { id: "5", name: "CSC 220" },
  //       { id: "6", name: "CSC 230" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer"
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar"
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: [
  //       { id: "5", name: "CSC 220" },
  //       { id: "6", name: "CSC 230" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer"
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: [
  //       { id: "3", name: "CSC 260" },
  //       { id: "4", name: "CSC 270" }
  //     ],
  //     credits: 3,
  //     subustitutes: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar"
  //   }
  // ];

  // allCourses = [
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true,
  //     eligible: false
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: { id: "3", name: "CSC 260" },
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: false,
  //     eligible: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true,
  //     eligible: false
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: { id: "3", name: "CSC 260" },
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: false,
  //     eligible: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true,
  //     eligible: false
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: { id: "3", name: "CSC 260" },
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: false,
  //     eligible: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true,
  //     eligible: false
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: { id: "3", name: "CSC 260" },
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: false,
  //     eligible: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true,
  //     eligible: false
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: { id: "3", name: "CSC 260" },
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: false,
  //     eligible: true
  //   },
  //   {
  //     id: "1",
  //     number: "CSC 01",
  //     prerequisites: null,
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "1",
  //     courseName: "Spartan summer",
  //     registered: true,
  //     eligible: false
  //   },
  //   {
  //     id: "2",
  //     number: "CSC 280",
  //     prerequisites: { id: "3", name: "CSC 260" },
  //     credits: 3,
  //     Substitute: "CSS 01",
  //     AcademicTerm: "2",
  //     courseName: "Applied sceience Seminar",
  //     registered: false,
  //     eligible: true
  //   }
  // ];

  constructor(private http: HttpClient) {}

  getEligibleCourses() {
    this.http.get(this.url + "/courses/prerequisites").subscribe({
      next: res => this.eligibleCourses.next(res),
      error: err => this.eligibleCourses.next(null)
    });
  }

  updateEligibleCourses() {
    return this.eligibleCourses.asObservable();
  }

  getPrerequisiteCourses() {
    this.http.get(this.url + "/courses/prerequisites").subscribe({
      next: res => this.coursesWithPrerequisites.next(res),
      error: err => this.coursesWithPrerequisites.next(null)
    });
  }

  updatePrerequisiteCourses() {
    return this.coursesWithPrerequisites.asObservable();
  }

  getSpringCourses() {
    this.http.get(this.url + "/courses/prerequisites").subscribe({
      next: res => this.springCourses.next(res),
      error: err => this.springCourses.next(null)
    });
  }

  updateSpringCourses() {
    return this.springCourses.asObservable();
  }

  getFallCourses() {
    this.http.get(this.url + "/courses/prerequisites").subscribe({
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
}

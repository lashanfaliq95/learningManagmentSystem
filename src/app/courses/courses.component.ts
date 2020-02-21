import { Component, OnInit } from "@angular/core";

@Component({
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent {
  specialization = {
    id: "1",
    name: "BS.CSC.CET"
  };

  courses = [
    {
      id: "1",
      number: "CSC 01",
      prerequsites: null,
      credits: 3,
      subustitutes: "CSS 01",
      AcademicTerm: "1",
      courseName:"Spartan summer"
    },
    {
      id: "2",
      name: "CSC 280",
      prerequsites: [
        { id: "3", name: "CSC 260" },
        { id: "4", name: "CSC 270" }
      ],
      credits: 3,
      subustitutes: "CSS 01",
      AcademicTerm: "2"
    }
  ];
}

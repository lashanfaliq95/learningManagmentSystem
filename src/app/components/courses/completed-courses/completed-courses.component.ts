import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.scss']
})
export class CompletedCoursesComponent implements OnInit {
  courses;
  title = "Welcome {{ student.name }}. These are that courses that you have completed under {{ degree.name }} so far."
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: '1',
        number: 'CSC 01',
        prerequsites: null,
        credits: 3,
        subustitutes: 'CSS 01',
        AcademicTerm: '1',
        courseName: 'Spartan summer'
      },
      {
        id: '2',
        number: 'CSC 280',
        prerequsites: [
          { id: '3', name: 'CSC 260' },
          { id: '4', name: 'CSC 270' }
        ],
        credits: 3,
        subustitutes: 'CSS 01',
        AcademicTerm: '2',
        courseName: 'Applied sceience Seminar'
      }
    ];
  }

}

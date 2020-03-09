import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-advisor-substitute-selection",
  templateUrl: "./advisor-substitute-selection.component.html",
  styleUrls: ["./advisor-substitute-selection.component.scss"]
})
export class AdvisorSubstituteSelectionComponent implements OnInit {
  students = [
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" },
    { id: 2, name: "rishan" },
    { id: 1, name: "lashan" }
  ];
  courses = [
    { id: 1, name: "maths" },
    { id: 2, name: "english" },
    { id: 1, name: "sinhala" },
    { id: 2, name: "tamil" },
    { id: 1, name: "lit" },
    { id: 1, name: "maths" },
    { id: 2, name: "english" },
    { id: 1, name: "sinhala" },
    { id: 2, name: "tamil" },
    { id: 1, name: "lit" },
    { id: 1, name: "maths" },
    { id: 2, name: "english" },
    { id: 1, name: "sinhala" },
    { id: 2, name: "tamil" },
    { id: 1, name: "lit" },
    { id: 1, name: "maths" },
    { id: 2, name: "english" },
    { id: 1, name: "sinhala" },
    { id: 2, name: "tamil" },
    { id: 1, name: "lit" }
  ];
  constructor() {}

  ngOnInit(): void {}

  onContinue({ form }) {
    console.log(form);
  }
}

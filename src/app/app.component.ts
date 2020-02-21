import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "learning-managment-system";
  currentDegree = null;
  courses = [
    [
      {
        id: "1",
        name: "Maths",
        credit: "3"
      },
      {
        id: "2",
        name: "Computer",
        credit: "2"
      }
    ],
    [
      {
        id: "3",
        name: "Arts",
        credit: "3"
      },
      {
        id: "4",
        name: "English",
        credit: "4"
      }
    ]
  ];

  onDegreeSelect(event) {
    console.log("event", event);
    this.currentDegree = event.degree;
  }
  // selectDegree(degree) {
  //   console.log(degree);
  //   if (degree.degree === "1") {
  //     this.availableDegrees = this.degrees[0];
  //   } else if (degree.degree === "2") {
  //     this.availableDegrees = this.degrees[1];
  //     console.log(this.availableDegrees );
  //   }
  //   console.log(this.availableDegrees);
  // }
}

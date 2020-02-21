import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "degrees",
  templateUrl: "./degrees.component.html",
  styleUrls: ["./degrees.component.scss"]
})
export class DegreesComponent {
  @Output() degreeSelect = new EventEmitter();
  degrees = [
    { id: "1", name: "BS.CSC" },
    { id: "2", name: "BS.ITE" }
  ];

  onContinue(form) {
    console.log("id", form.form.value);
    if (form.form.value)) {
      this.routere
}
  }
}

import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "majors",
  templateUrl: "./majors.component.html",
  styleUrls: ["./majors.component.scss"]
})
export class MajorsComponent {
  @Input() currentDegree;
  @Output() majorSelect = new EventEmitter();

  majorsForCse = [
    { id: "1", name: "BS.CSC.CYBT.DNIMAS" },
    { id: "2", name: "BS.CSC.CET" }
  ];

  majorsForIte = [
    { id: "1", name: "BS.ITE.CYBT.DNIMAS" },
    { id: "2", name: "BS.ITE.CET" }
  ];
  majors = this.majorsForCse;

  onContinue(form) {
    console.log("form");
    this.majorSelect.emit(form.form.value);
  }
}

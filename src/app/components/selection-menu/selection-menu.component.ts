import { MajorsService } from "./../../services/majors.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "selection-menu",
  templateUrl: "./selection-menu.component.html",
  styleUrls: ["./selection-menu.component.scss"]
})
export class SelectionMenuComponent implements OnInit {
  student;
  majorId;

  selectionMapping = [
    {
      id: "1",
      message: "Show me the courses that I have completed",
      redirectUrl: "/completedCourses"
    },
    {
      id: "2",
      message:
        "Show me the eligible courses that I have to take on this semester",
      redirectUrl: "/eligibleCourses"
    },
    {
      id: "3",
      message: "Show me the prerequisites for my degree",
      redirectUrl: "/prerequisiteCourses"
    },
    {
      id: "4",
      message: "Map out all semesters",
      redirectUrl: "/semesterMap"
    },
    {
      id: "5",
      message: "Show me the courses offered in the current semester only",
      redirectUrl: "/currentSemesterCourses"
    },
    {
      id: "6",
      message: "Register me for the coming semester",
      redirectUrl: "/registerCourses"
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private majorService: MajorsService
  ) {}

  ngOnInit() {
    this.majorId = this.majorService.getCurrentMajor();
    this.student = this.userService.getUser();
  }

  onContinue({ form }) {
    console.log("form", form.value);
    const currentSelection = this.selectionMapping.filter(
      selection => selection.id === form.value.selection
    )[0];
    console.log(currentSelection);
    if (currentSelection) {
      this.router.navigate([currentSelection.redirectUrl]);
    }
  }
}

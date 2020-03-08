import { MajorsService } from "./../../services/majors.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
      message: "Show me the prerequisite for a selected course",
      redirectUrl: "/prerequisiteCourses"
    },
    {
      id: "2",
      message: "Show me the courses offered in the Fall semester only",
      redirectUrl: "/fallSemesterCourses"
    },
    {
      id: "3",
      message: "Show me the courses offered in the Spring semester only",
      redirectUrl: "/springSemesterCourses"
    },
    {
      id: "4",
      message: "Map out all my semesters",
      redirectUrl: "/semesterMap"
    },
    {
      id: "5",
      message: "Show me how the remaining years look like",
      redirectUrl: "/completedAndRemainingCourses"
    },
    {
      id: "6",
      message:
        "Show me how the the eligible courses that I can take on this semester.",
      redirectUrl: "/eligibleCourses"
    },
    {
      id: "7",
      message:
        "Send an email to my Advisor that I have fullfilled the pre-registration criteria",
      redirectUrl: "/registerStudent"
    },
    {
      id: "8",
      message: "Summary of Courses",
      redirectUrl: "/summaryOfComponents"
    }
  ];

  constructor(
    private router: Router,
    private userService: UserService,
    private majorService: MajorsService
  ) {}

  ngOnInit() {
    this.student = this.userService.getUser();
    console.log(this.student);
    if (!this.student) {
      this.router.navigate(["/"]);
    } else {
      this.majorId = this.majorService.getCurrentMajor();
    }
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

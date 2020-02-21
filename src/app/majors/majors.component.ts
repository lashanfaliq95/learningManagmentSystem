import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss']
})
export class MajorsComponent implements OnInit {
  currentDegree = null;
  currentMajors = null;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe();
    const degreeId = this.route.snapshot.queryParamMap.get('degreeId');
    this.currentDegree = this.route.snapshot.queryParamMap.get('degreeName');
    console.log(degreeId === '1', degreeId === '2');
    if (degreeId === '1') {
      this.currentMajors = this.majorsForCse;
    } else if (degreeId === '2') {
      this.currentMajors = this.majorsForIte;
    }
  }

  majorsForCse = [
    { id: '1', name: 'BS.CSC.CYBT.DNIMAS' },
    { id: '2', name: 'BS.CSC.CET' }
  ];

  majorsForIte = [
    { id: '1', name: 'BS.ITE.CYBT.DNIMAS' },
    { id: '2', name: 'BS.ITE.CET' }
  ];

  onContinue({ form }) {
    console.log('form', form.value);
    if (form.value.major) {
      this.router.navigate(['/selection'], {
        queryParams: {
          major: form.value.major
        }
      });
    }
  }
}

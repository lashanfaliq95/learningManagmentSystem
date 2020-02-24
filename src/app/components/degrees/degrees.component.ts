import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent {
  @Output() degreeSelect = new EventEmitter();

  constructor(private router: Router) {}

  degrees = [
    { id: '1', name: 'BS.CSC' },
    { id: '2', name: 'BS.ITE' }
  ];

  onContinue({ form }) {
    console.log('id', form.value);
    const degreeName = form.value.degree === '1' ? this.degrees[0].name : this.degrees[1].name;
    if (form.value.degree) {
      this.router.navigate(['/majors'], {
        queryParams: {
          degreeId: form.value.degree,
          degreeName
        }
      });
    }
  }
}

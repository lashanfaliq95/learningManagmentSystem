import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterMapComponent } from './semester-map.component';

describe('SemesterMapComponent', () => {
  let component: SemesterMapComponent;
  let fixture: ComponentFixture<SemesterMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { Student } from '../resources/student';
import { STUDENTS } from '../resources/mock-students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styles: [
  ]
})
export class StudentsListComponent {
  studentsList: Student[] = STUDENTS;

  constructor(private router: Router) {

  }

  goToStudent(student: Student) {
    this.router.navigate(['/student', student.id]);
  }
}

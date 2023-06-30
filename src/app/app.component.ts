import { Component, OnInit } from '@angular/core';
import {STUDENTS} from './students/mock-students';
import {Student} from './students/student';
import { POSITIONS } from './students/positions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'angular-tuto';
  studentsList: Student[] = STUDENTS;
  studentSelected: Student|undefined;
  POSITIONS = POSITIONS;

  ngOnInit(): void {
      console.table(this.studentsList)
  }
  selectStudent(studentId: string) {
    const id = parseInt(studentId);
    const student: Student|undefined = this.studentsList.find(s => s.id === parseInt(studentId))
    this.studentSelected = student;
    if(student) {
      console.log(`student : ${this.studentsList[id].name}`)
    } else {
      console.log(`Le student n'existe pas`)
    }
  }
}

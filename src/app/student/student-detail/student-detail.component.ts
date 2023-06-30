import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { STUDENTS } from '../resources/mock-students';
import { Student } from '../resources/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {

  studentsList: Student[];
  student: Student|undefined;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.studentsList = STUDENTS;
    const studentId: string|null = this.route.snapshot.paramMap.get('id');
    if(studentId) {
      this.student = this.studentsList.find(student => student.id === parseInt(studentId))
    } 
  }

  goBack() {
    this.router.navigate(['/students'])
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './student/students-list/students-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

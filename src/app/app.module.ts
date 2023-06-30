import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './student/directives/border-card.directive';
import { StudentTypeColorPipe } from './student/pipes/student-type-color.pipe';
import { StudentsListComponent } from './student/students-list/students-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    StudentTypeColorPipe,
    StudentsListComponent,
    StudentDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

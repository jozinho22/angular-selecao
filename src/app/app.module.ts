import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { StudentTypeColorPipe } from './pipes/student-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    StudentTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

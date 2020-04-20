import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login_q3/login/login.component';
import { RegisterComponent } from './login_q3/register/register.component';
import { DashboardComponent } from './login_q3/dashboard/dashboard.component';
import { CourselistComponent } from './Course_q6/courselist/courselist.component';
import { CoursedetailsComponent } from './Course_q6/coursedetails/coursedetails.component';
import { GreetingcardComponent } from './greetingcard_q4/greetingcard/greetingcard.component';
import { ImagefilterPipe } from './greetingcard_q4/imagefilter.pipe';
import { StudentcreateComponent } from './Student_q8/studentcreate/studentcreate.component';
import { StudenthomeComponent } from './Student_q8/studenthome/studenthome.component';
import { CardComponent } from './Card_q5/card/card.component';
import { AccordionComponent } from './Card_q5/accordion/accordion.component';
import { RegistrationFormComponent } from './UserReg_q7/registration-form/registration-form.component';
import {GreetingcardService} from './greetingcard_q4/greetingcard.service';
import {StudentguardService} from './Student_q8/studentguard.service';
import {CoursesService} from './Course_q6/courses.service';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { ChildComponent } from './Q1_Q2/child/child.component';
import { HobbyComponent } from './Q1_Q2/hobby/hobby.component';
import { ParentComponent } from './Q1_Q2/parent/parent.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CourselistComponent,
    CoursedetailsComponent,
    GreetingcardComponent,
    ImagefilterPipe,
    StudentcreateComponent,
    StudenthomeComponent,
    CardComponent,
    AccordionComponent,
    RegistrationFormComponent,
    ChildComponent,
    HobbyComponent,
    ParentComponent
  ],
  imports: [
   
    RouterModule,
    BrowserModule,FormsModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [GreetingcardService,ImagefilterPipe,StudentguardService,CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

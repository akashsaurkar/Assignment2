import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login_q3/login/login.component';
import { RegisterComponent } from '../login_q3/register/register.component';
import { DashboardComponent } from '../login_q3/dashboard/dashboard.component';
// import {HobbyComponent} from '../Q1_Q2/hobby/hobby.component';
// import {ChildComponent} from '../Q1_Q2/child/child.component';
import {ParentComponent} from '../Q1_Q2//parent/parent.component'; 
import {GreetingcardComponent} from '../greetingcard_q4/greetingcard/greetingcard.component';
import {RegistrationFormComponent} from '../UserReg_q7/registration-form/registration-form.component';
import { CardComponent} from '../Card_q5/card/card.component';
import {CourselistComponent} from '../Course_q6/courselist/courselist.component';
import {CoursedetailsComponent} from '../Course_q6/coursedetails/coursedetails.component';
import { StudenthomeComponent } from '../Student_q8/studenthome/studenthome.component';
import { StudentcreateComponent } from '../Student_q8/studentcreate/studentcreate.component';
import { StudentguardService } from '../Student_q8/studentguard.service';

const routes:Routes =[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  // {path:'child',component:ChildComponent},
  // {path:'hobby',component:HobbyComponent},
  {path:'parent',component:ParentComponent}, 
  {path:'greeting',component:GreetingcardComponent},
  {path:'regform',component:RegistrationFormComponent},

 
   {path:'courselist',component:CourselistComponent},
  {path:'course/:id',component:CoursedetailsComponent} ,

  {path : "home", component:StudenthomeComponent},
  {path: "createstudent", 
  component:StudentcreateComponent, 
  canDeactivate:[StudentguardService]}, 
  {path:'',redirectTo:'/home', pathMatch:'full'}

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

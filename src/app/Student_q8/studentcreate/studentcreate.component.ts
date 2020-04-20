import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {

  @ViewChild('studentForm') public createStudentForm:NgForm;
  fullName :string;
  mobile:number;
  email:string;
  schoolname:string;
  Address:string;

  constructor() { }
 
  ngOnInit() { 
    
  }
 
  saveStudent(studentForm: NgForm): void {
    this.fullName= studentForm.value.fullName;
    this.email = studentForm.value.email;
    this.mobile=studentForm.value.mobile;
    this.schoolname=studentForm.value.schoolname;
    this.Address=studentForm.value.Address;

    alert("Full Name :"+this.fullName +"\n"+ " Mobile No : "+ this.mobile + " Email : "+ this.email
         +" School Name :"+this.schoolname + " Address :"+ this.Address) ;

  }
 
}
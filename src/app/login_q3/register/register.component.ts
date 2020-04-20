import { Component, OnInit } from '@angular/core';    
//import { LoginService } from '../login.service';    
//import {Register} from '../register/register.component.spec';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
    
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data = false;    
  UserForm: any;    
  massage:string;  
  exportData:any[] = [{FirstName:"Akash", LastName:"Saurkar" , Username:"akash.saurkar@yash.com",Password:"",Email:"akash.saurkar@yash.com",ContactNo:"9850416256",Address:"Pune"}];  

  constructor() { }    
  
  //public UserList:any;
 // UserList = [{FirstName:"", LastName:"password" , Username:"admin",Password:"",Email:"",ContactNo:"",Address:""}];
 
 // public ExistUserList = [{user:"akash.saurkar@yash.com", password:"password" , role:"admin"}];

  ngOnInit() {    
    
  }    
   onFormSubmit(f:NgForm)    
  {    
    debugger;     
    console.log(f.value.FirstName);
    if(f.value.Username=="akash.saurkar@yash.com")
    {
      alert ("This user is already exist");
    }else
    { 
      if(f.value.FirstName=="" || f.value.LastName=="" ||f.value.Username=="")
      {
        alert("Please fill proper details!");
      }
      else{
        this.exportData.push({ FirstName: f.value.FirstName, LastName:f.value.LastName, Username:f.value.Username, Password:f.value.Password, Email:f.value.Email, ContactNo:f.value.ContactNo, Address:f.value.Address  })
        alert("User details submitted successfully!");
      }
  
    }
  }    


}    
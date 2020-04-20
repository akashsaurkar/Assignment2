import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any={};    
    
  public errorMessage:string;   
   isAuth:boolean;
 
   constructor(private router:Router,private LoginService:LoginService) { }
   
  public Users = [{user:"akash.saurkar@yash.com", password:"password" , role:"admin"}];
 
   ngOnInit(): void {
     // sessionStorage.removeItem('UserName');    
     // sessionStorage.clear();
   }
   
   login(f:NgForm){    
     debugger;        
 
     let user = this.Users.slice(0).find( y=>y.user == f.value.UserName
           &&  y.password == f.value.Password);
 
     if(user)
     {
       this.router.navigate(['/','dashboard']);
     }
     else
     {
        this.isAuth=true;
       this.errorMessage="UnAuthorize User";
       alert(this.errorMessage);
        this.router.navigate(['/','login']);
 
     }
     
   };    
 
   gotoRegister()
   {
     this.router.navigate(['/','register']);
   }
 
 }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  exportData:any[] = [{FirstName:"Akash", LastName:"Saurkar" , Username:"akash.saurkar@yash.com",Password:"",Email:"akash.saurkar@yash.com",ContactNo:"9850416256",Address:"Pune"}];  

  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(index) {  
    debugger;
    if(this.exportData.length ==0) {  
      alert("Can't delete the row when there is only one row");  
        return false;  
    } else {  
        this.exportData.splice(index, 1);  
        alert('Row deleted successfully');  
        return true;  
    }  
}  

}

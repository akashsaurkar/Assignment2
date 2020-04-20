import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  public title: string= "Student Home";

  constructor() { }

  ngOnInit(): void {
  }

}


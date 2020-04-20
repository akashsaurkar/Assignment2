import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  title: string = "Course List";
  courseList : any[] = [];  
  
  constructor(private courseService : CoursesService) {
    this.courseList = courseService.getcourseList();
   }
  ngOnInit() {
  }
 
}
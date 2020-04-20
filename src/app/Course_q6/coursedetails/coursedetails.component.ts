import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  course : any;
  constructor(private courseService : CoursesService, private route:ActivatedRoute) { }
 
  ngOnInit() {
    this.course = this.courseService.getCourse(+this.route.snapshot.params['id'])
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  visibleCourse= [];
  constructor() { }
  getcourseList(){
    debugger;
    return this.visibleCourse = courseList.slice(0);
}

getCourse(id: number){
  return courseList.slice(0).find(cousre=>cousre.id ==id);
}  

}


const courseList= [
  {"id":1, "name":"Spring", "Descrtiption":"The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform"},
  {"id":2, "name":"Hibernate", "Descrtiption":"Hibernate is a Java framework that simplifies the development of Java application to interact with the database. It is an open source, lightweight, ORM (Object Relational Mapping) tool. Hibernate implements the specifications of JPA (Java Persistence API) for data persistence"},
  {"id":3, "name":"Junit", "Descrtiption":"Search Results  Featured snippet from the web  JUnit is an open source framework, which is used for writing and running tests. Provides annotations to identify test methods. Provides assertions for testing expected results. Provides test runners for running tests"},
  {"id":4, "name":"Html", "Descrtiption":"First developed by Tim Berners-Lee in 1990, HTML is short for Hypertext Markup Language. HTML is used to create electronic documents (called pages) that are displayed on the World Wide Web. Each page contains a series of connections to other pages called hyperlinks."},
  {"id":4, "name":"CSS", "Descrtiption":"CSS. Stands for Cascading Style Sheet Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML"},
 
];

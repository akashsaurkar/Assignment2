import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';

@Injectable({
  providedIn: 'root'
})

export class StudentguardService  implements CanDeactivate<StudentcreateComponent> {
 
  constructor() { }

  canDeactivate(component: StudentcreateComponent): boolean {
      if (component.createStudentForm.dirty) {
          return confirm('Are you sure you want to discard your changes?');
      }

      return true;
  }
}

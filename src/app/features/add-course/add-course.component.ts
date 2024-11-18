import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [ FormsModule, RouterModule, TopNavComponent ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddCourseComponent {
  course: string = '';
  author: string = '';
  imageUrl: string = '';
  price: number = 0;

  onSubmit() {
    // Handle form submission
  }

}

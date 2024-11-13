import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'courseHub';

  posts: any[] = [];
  newPost = { title: 'Angular API', body: 'Integrating API with Angular' };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('running')
    // Fetching data on component initialization
    /* this.apiService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
        console.log('Posts fetched successfully', this.posts);
      },
      (error: any) => {
        console.error('Error fetching posts', error);
      }
    ); */

    // Adding a new post (Example of a POST request)
   /*  this.apiService.addPost(this.newPost).subscribe(
      (response: any) => {
        console.log('Post added successfully', response);
      },
      (error: any) => {
        console.error('Error adding post', error);
      }
    ); */
  }
}

// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import this for API calls
import { AppComponent } from './app.component';
import { ApiService } from './api.service'; // Import your ApiService
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { HomeComponent } from 'features/registration/home.component';
import { CoursesComponent } from 'features/registration/courses.component'; // Import your components
import { UserService } from 'services/user.service'; // Import your UserService
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  // Add your components here
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Make sure this is included for HTTP requests
    CommonModule, 
    FormsModule 
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent] // The main component to bootstrap
})
export class AppModule {}

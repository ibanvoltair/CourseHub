// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from 'features/registration/home.component';
import { CoursesComponent } from 'features/registration/courses.component';
import { UserService } from 'services/user.service';
/* import { TopNavComponent } from 'shared/top-nav/top-nav.component'; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    /* TopNavComponent */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

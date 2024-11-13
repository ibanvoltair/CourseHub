import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'localhost:8080/users';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Send POST request to register the user
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}

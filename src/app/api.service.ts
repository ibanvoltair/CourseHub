// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/users';  // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Send POST request to register the user
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}

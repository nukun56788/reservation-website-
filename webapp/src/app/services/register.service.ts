import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://wag10.bowlab.net/api'; 

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  register(data: { 
    title: string; 
    firstName: string; 
    lastName: string; 
    phone: string; 
    email: string; 
    password: string; 
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}

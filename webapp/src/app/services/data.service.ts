import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://wag10.bowlab.net/api'; 

  constructor(private http: HttpClient) {}

  //login
  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  //register
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

  //fetch zone
  getEvents() {
    return this.http.get(`${this.apiUrl}/zones`);
  }

  //fetch booth
  getBooths() {
    return this.http.get(`${this.apiUrl}/booths`);
  }
}

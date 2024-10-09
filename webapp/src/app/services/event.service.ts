import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const Zones = 'https://wag10.bowlab.net/api/zones';
@Injectable({
  providedIn: 'root'
})
export class EventService {
private http = inject(HttpClient)
  constructor() { }
  getEvents(){
    return this.http.get(Zones);
  }
}

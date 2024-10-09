// booth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Zones = 'https://wag10.bowlab.net/api/booths';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {
private http = inject(HttpClient)
  constructor() { }
  getZones(){
    return this.http.get(Zones);
  }
}
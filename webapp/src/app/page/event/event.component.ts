import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event.service';
import { subscribe } from 'diagnostics_channel';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  // http = inject(HttpClient);
  private eventService = inject(EventService);
  events: any = [];

  ngOnInit(): void {
    // this.fetchEvents();
    this.loadEvents();
  }

  // fetchEvents() {
  //   this.http.get('https://wag10.bowlab.net/api/zones')
  //     .subscribe((events: any) => {
  //       console.log(events);
  //       this.events = events;
  //     });
  // }
  // loadEvents(){
  //   this.eventService.getEvents().subscribe((events: any) => {
  //     console.log(events);
  //     this.events = events;
  //   });
  // }
  loadEvents(){
    this.eventService.getEvents().subscribe({
      next: (events: any) =>{
        this.events = events;
        console.log('Events fetched successfully')
      },
      error: (error) => console.log('Error fetching events:',error)
    });
  }
  trackById(index: number, event: any) {
    return event.id; 
  }
}

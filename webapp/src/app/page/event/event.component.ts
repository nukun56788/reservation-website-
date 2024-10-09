import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
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
  private eventService = inject(DataService);
  events: any = [];

  ngOnInit(): void {
    // this.fetchEvents();
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEvents().subscribe({
      next: (events: any) =>{
        this.events = events;
      },
      error: (error) => console.log('Error fetching events:',error)
    });
  }
  trackById(index: number, event: any) {
    return event.id; 
  }
}

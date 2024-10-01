import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { HeaderComponent } from "../../component/header/header.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  constructor(private dataService:DataService, private http:HttpClient){
    http.get(dataService.apiEndpoint + "/zones").subscribe((data:any) => {
      console.log(data);
    });
  }
}

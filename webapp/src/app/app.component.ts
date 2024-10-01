import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webapp';
  constructor(private http: HttpClient){
    // let url = 'http://wag10.bowlab.net/api/zones';
    // this.http.get(url).subscribe(data => {
    //   console.log(data);
    // })
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HeaderComponent } from '../../component/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-booth',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, RouterModule],
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.scss']
})
export class BoothComponent implements OnInit {
  private boothService = inject(DataService);
  booths: any = [];

  ngOnInit(): void {

    this.loadBooths();
  }
  loadBooths(){
    this.boothService.getBooths().subscribe({
      next: (booths: any) =>{
        this.booths = booths;
        console.log('booths fetched successfully',booths)
      },
      error: (error) => console.log('Error fetching events:',error)
    });
  }
  trackById(index: number, booth: any) {
    return booth.id; 
  }

}

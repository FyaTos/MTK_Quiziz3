import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';  
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-home.component.html',
  styleUrl: './menu-home.component.css'
})
export class MenuHomeComponent {
  data$: Observable<any[]>;   
  constructor(private dataService: DataService, private router: Router) {
    this.data$ = this.dataService.getData();  
  }
 
}

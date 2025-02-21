import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-pemilihan-materi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-pemilihan-materi.component.html',
  styleUrl: './menu-pemilihan-materi.component.css'
})
export class MenuPemilihanMateriComponent {
  data$: Observable<any[]>;  

  constructor(private dataService: DataService, private router: Router) {
    this.data$ = this.dataService.getData();  
  }

  isUnlocked(id: number): boolean {
    if (id === 1) return true; // ID 1 selalu terbuka
    return localStorage.getItem(`completed_${id - 1}`) === 'true'; // Hanya terbuka jika soal sebelumnya selesai
  }

  onBoxClick(id: number) {
    if (this.isUnlocked(id)) {
      this.router.navigate(['/menu-soal-materi', id]);
    } else {
      alert('Selesaikan soal sebelumnya untuk membuka yang ini!');
    }
  }

  markAsCompleted(id: number) {
    localStorage.setItem(`completed_${id}`, 'true'); 
  }
}

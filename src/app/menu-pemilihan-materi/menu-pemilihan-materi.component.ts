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
    if (id === 1) return true;   
    return localStorage.getItem(`unlocked_${id}`) === 'true';  
  }

  onBoxClick(id: number) {
    if (this.isUnlocked(id)) {
      this.router.navigate(['/menu-soal-materi', id]);  
    } else {
      this.askForCode(id);
    }
  }

  askForCode(id: number) {
    const correctCode = this.dataService.getCodeById(id);
    if (!correctCode) return;  

    const userCode = prompt(`Masukkan kode untuk membuka "${id}"`);
    if (userCode === correctCode) {
      localStorage.setItem(`unlocked_${id}`, 'true');  
      alert('Berhasil membuka challenge!');
    } else {
      alert('Kode salah! Coba lagi.');
    }
  }
}

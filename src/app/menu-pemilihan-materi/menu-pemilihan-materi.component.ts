import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';  
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-menu-pemilihan-materi',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

 
  

  showCodeModal = false;
  unlockTargetId: number | null = null;
  enteredCode: string = '';
  codeFeedback: string = '';
  
  askForCode(id: number) {
    this.unlockTargetId = id;
    this.enteredCode = '';
    this.codeFeedback = '';
    this.showCodeModal = true;
  }
  
  submitCode() {
    const correctCode = this.dataService.getCodeById(this.unlockTargetId!);
    if (this.enteredCode === correctCode) {
      localStorage.setItem(`unlocked_${this.unlockTargetId}`, 'true');
      this.showCodeModal = false;
      alert('🎉 Berhasil membuka challenge!');
    } else {
      this.codeFeedback = 'Kode salah! Coba lagi.';
    }
  }
  
  closeCodeModal() {
    this.showCodeModal = false;
  }
  
}

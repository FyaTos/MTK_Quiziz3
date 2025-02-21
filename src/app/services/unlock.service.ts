import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnlockService {
  // Menyimpan status ID yang sudah selesai
  private unlockedIds: number[] = [1]; // Mulai dengan ID 1 yang terbuka secara default

  // Data materi yang akan ditampilkan
  private data = [
    { id: 1, title: 'Materi 1' },
    { id: 2, title: 'Materi 2' },
    { id: 3, title: 'Materi 3' },
    // Daftar materi lainnya
  ];

  constructor() {}

  // Mengecek apakah ID sudah terbuka
  isUnlocked(id: number): boolean {
    return this.unlockedIds.includes(id);
  }

  // Menandai ID sebagai selesai (terbuka)
  markAsCompleted(id: number): void {
    if (!this.unlockedIds.includes(id)) {
      this.unlockedIds.push(id);
    }
  }

  // Mengambil data materi
  getData(): Observable<any[]> {
    return of(this.data); // Mengembalikan data materi dalam bentuk Observable
  }

  // Metode untuk menandai ID sebagai selesai dan mengubah status materi
  finishLesson(id: number): void {
    this.markAsCompleted(id); // Tandai sebagai selesai
    // Lakukan tindakan tambahan jika diperlukan, misalnya notifikasi atau logika lain
  }
}

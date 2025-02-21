  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService { 
    private data = new BehaviorSubject<any[]>([
      {
        id: 1,
        title: 'Bilangan Bulat',
        color: 'bg-blue-500', 
        descriptions: {
          explanation: 'Penjelasan untuk Video 1.',
          example: 'Contoh soal untuk Video 1.'   ,
        },
        youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        quizzes: [
          {
            "question": "Hasil dari 7 + (-5) adalah?",
            "correctAnswer": "2",
            "incorrectAnswers": ["-2", "12", "-12"]
          },
          {
            "question": "Hasil dari (-8) - (-3) adalah?",
            "correctAnswer": "-5",
            "incorrectAnswers": ["5", "-11", "11"]
          },
          {
            "question": "Hasil dari (-4) × 6 adalah?",
            "correctAnswer": "-24",
            "incorrectAnswers": ["24", "-10", "10"]
          },
          {
            "question": "Hasil dari 36 ÷ (-6) adalah?",
            "correctAnswer": "-6",
            "incorrectAnswers": ["6", "-3", "3"]
          },
          {
            "question": "Hasil dari (-9) × (-2) adalah?",
            "correctAnswer": "18",
            "incorrectAnswers": ["-18", "9", "-9"]
          },
          {
            "question": "Bilangan bulat yang lebih besar dari -7 adalah?",
            "correctAnswer": "-5",
            "incorrectAnswers": ["-8", "-9", "-10"]
          },
          {
            "question": "Jika suhu di pagi hari adalah -2°C dan meningkat 5°C, maka suhu saat ini adalah?",
            "correctAnswer": "3°C",
            "incorrectAnswers": ["-3°C", "7°C", "2°C"]
          },
          {
            "question": "Hasil dari 5 - (-3) adalah?",
            "correctAnswer": "8",
            "incorrectAnswers": ["2", "-8", "0"]
          },
          {
            "question": "Manakah yang merupakan bilangan bulat negatif?",
            "correctAnswer": "-10",
            "incorrectAnswers": ["0", "5", "12"]
          },
          {
            "question": "Hasil dari (-15) ÷ 3 adalah?",
            "correctAnswer": "-5",
            "incorrectAnswers": ["5", "-3", "3"]
          },
          {
            "question": "Suhu awal di freezer adalah -12°C. Jika suhu turun 4°C, maka suhu sekarang adalah?",
            "correctAnswer": "-16°C",
            "incorrectAnswers": ["-8°C", "-10°C", "-18°C"]
          },
          {
            "question": "Hasil dari (-7) + (-3) adalah?",
            "correctAnswer": "-10",
            "incorrectAnswers": ["10", "-4", "4"]
          },
          {
            "question": "Hasil dari 6 × (-3) adalah?",
            "correctAnswer": "-18",
            "incorrectAnswers": ["18", "-9", "9"]
          },
          {
            "question": "Manakah yang bukan bilangan bulat?",
            "correctAnswer": "1.5",
            "incorrectAnswers": ["0", "-2", "5"]
          },
          {
            "question": "Sifat komutatif berlaku untuk operasi?",
            "correctAnswer": "Penjumlahan dan perkalian",
            "incorrectAnswers": ["Pengurangan dan pembagian", "Hanya penjumlahan", "Hanya perkalian"]
          },
          {
            "question": "Hasil dari 5 - (-3) adalah?",
            "correctAnswer": "8",
            "incorrectAnswers": ["2", "-8", "0"]
          },
          {
            "question": "Manakah yang merupakan bilangan bulat negatif?",
            "correctAnswer": "-10",
            "incorrectAnswers": ["0", "5", "12"]
          },
          {
            "question": "Hasil dari (-15) ÷ 3 adalah?",
            "correctAnswer": "-5",
            "incorrectAnswers": ["5", "-3", "3"]
          },
          {
            "question": "Suhu awal di freezer adalah -12°C. Jika suhu turun 4°C, maka suhu sekarang adalah?",
            "correctAnswer": "-16°C",
            "incorrectAnswers": ["-8°C", "-10°C", "-18°C"]
          },
          {
            "question": "Hasil dari (-7) + (-3) adalah?",
            "correctAnswer": "-10",
            "incorrectAnswers": ["10", "-4", "4"]
          },
          {
            "question": "Hasil dari 6 × (-3) adalah?",
            "correctAnswer": "-18",
            "incorrectAnswers": ["18", "-9", "9"]
          },
        
        ]
      },
      { 
        id: 2, 
        title: 'Aljabar', 
        color: 'bg-green-500', 
        descriptions: {
          explanation: 'Penjelasan untuk Video 2.',
          example: 'Contoh soal untuk Video 2.',
        },
        buttontext: '1',
         youtube: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' 
      },
    { 
      id: 3,
      title: 'Linear',
      color: 'bg-purple-500',
      youtube: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      descriptions: {
        explanation: 'Penjelasan untuk Video 3.',
        example: 'Contoh soal untuk Video 3.',
      },
      buttontext: '3',
      
    },
    { 
      id: 4, 
      title: 'Kotak 4', 
      color: 'bg-yellow-500', 
      youtube: 'https://www.youtube.com/embed/L_jWHffIx5E',
      descriptions: {
        explanation: 'Penjelasan untuk Video 4.',
        example: 'Contoh soal untuk Video 4.',
      },
      buttontext: '3',
      explanation: "Aljabar adalah salah satu cabang matematika yang mempelajari simbol-simbol dan operasi yang dilakukan pada simbol-simbol tersebut. Konsep aljabar seringkali diperkenalkan kepada siswa pada jenjang sekolah menengah, dan menjadi dasar dalam pembelajaran matematika lebih lanjut.\n\nVariabel dalam Aljabar\nSalah satu konsep dasar dalam aljabar adalah variabel. Variabel adalah simbol yang mewakili suatu nilai yang dapat berubah-ubah. Variabel seringkali dinyatakan dengan huruf-huruf seperti x atau y. Pada awalnya, nilai variabel mungkin tidak diketahui, namun dapat ditemukan melalui penyelesaian persamaan atau pertidaksamaan.\n\nPersamaan dalam Aljabar\nPersamaan adalah suatu pernyataan yang menghubungkan dua atau lebih variabel dengan tanda sama dengan (=). Persamaan seringkali digunakan untuk menemukan nilai variabel yang memenuhi hubungan tersebut. Sebagai contoh, perhatikan persamaan berikut:\n\nx + 3 = 7\n\nPersamaan di atas berarti bahwa jumlah x dengan angka 3 adalah sama dengan angka 7. Untuk menemukan nilai x, kita dapat melakukan operasi pada kedua sisi persamaan tersebut. Dalam hal ini, kita dapat mengurangkan 3 dari kedua sisi persamaan untuk mendapatkan:\n\nx = 4\n\nJadi, nilai x dalam persamaan tersebut adalah 4.\n\nPertidaksamaan dalam Aljabar\nPertidaksamaan adalah suatu pernyataan yang menghubungkan dua atau lebih variabel dengan tanda tidak sama dengan (≠), lebih besar dari (>), lebih kecil dari (<), lebih besar sama dengan (≥), atau lebih kecil sama dengan (≤). Pertidaksamaan digunakan untuk membandingkan nilai variabel atau ekspresi yang tidak sama.\n\nPenyelesaian Masalah dalam Aljabar\nAljabar dapat digunakan untuk menjawab berbagai macam masalah matematika yang melibatkan variabel atau ekspresi. Pada dasarnya, penyelesaian masalah yang berkaitan dengan aljabar melibatkan langkah-langkah sebagai berikut:\n1. Identifikasi variabel yang relevan dalam masalah.\n2. Buat persamaan atau pertidaksamaan yang menggambarkan hubungan antara variabel tersebut.\n3. Selesaikan persamaan atau pertidaksamaan untuk menemukan nilai variabel yang memenuhi hubungan tersebut.\n4. Verifikasi solusi dengan menggantikan nilai variabel dalam masalah asli dan memastikan bahwa hubungan tetap terpenuhi.\n\nKesimpulan\nAljabar adalah cabang matematika yang mempelajari simbol-simbol dan operasi yang dilakukan pada simbol-simbol tersebut. Konsep dasar dalam aljabar meliputi variabel, persamaan, dan pertidaksamaan. Dengan menggunakan konsep ini, kita dapat menyelesaikan berbagai masalah matematika yang melibatkan nilai yang dapat berubah-ubah.",
   },
    { id: 5,
       title: 'Kotak 5',
        color: 'bg-red-500',
         youtube: 'https://www.youtube.com/embed/V-_O7nl0Ii0',
         descriptions: {
          explanation: 'Penjelasan untuk Video 5.',
          example: 'Contoh soal untuk Video 5.',
        },
         buttontext: '3',
     },
    { id: 6,
       title: 'Kotak 6',
        color: 'bg-pink-500',
         youtube: 'https://www.youtube.com/embed/kxopViU98Xo',
         descriptions: {
          explanation: 'Penjelasan untuk Video 24.',
          example: 'Contoh soal untuk Video 24.',
        },
         buttontext: '3',
     },
    { id: 7,
      title: 'Kotak 6',
       color: 'bg-pink-500',
        youtube: 'https://www.youtube.com/embed/kxopViU98Xo',
        descriptions: {
         explanation: 'Penjelasan untuk Video 24.',
         example: 'Contoh soal untuk Video 24.',
       },
        buttontext: '3',
    }
  ]);
 
  getVideoById(id: number): any {
    return this.data.value.find(item => item.id === id);
  }
 

  private currentIndex = new BehaviorSubject<number>(0);
  private score = new BehaviorSubject<number>(0);
  
  getData(): Observable<any[]> {
    return this.data.asObservable();
  }

  getCurrentIndex(): Observable<number> {
    return this.currentIndex.asObservable();
  }

  nextQuestion(): void {
    if (this.currentIndex.value < this.data.value[0].quizzes.length - 1) {
      this.currentIndex.next(this.currentIndex.value + 1);  
    } else { 
      console.log('Quiz 1 selesai! Membuka quiz 2.'); 
    }
  }

  getScore(): Observable<number> {
    return this.score.asObservable();
  }

  

  addScore(): void {
    this.score.next(this.score.value + 1);
  }

  resetGame(): void {
    this.currentIndex.next(0);
    this.score.next(0);
  }

}

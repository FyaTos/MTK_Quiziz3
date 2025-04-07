  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
    getDataById(id: number) {
      throw new Error('Method not implemented.');
    } 
    private data = new BehaviorSubject<any[]>([
      {
        id: 1,
        title: 'Bilangan Bulat',
        color: 'bg-blue-500', 
        nextId: 2,
        descriptions: {
            explanation: "## Pengertian Bilangan Bulat\n\nBilangan bulat terdiri dari bilangan bulat positif, bilangan bulat negatif, dan bilangan nol. Bilangan bulat positif adalah bilangan bulat yang nilainya lebih besar dari nol, misalnya: 1, 2, 3, dan seterusnya. Bilangan bulat negatif adalah bilangan bulat yang nilainya lebih kecil dari nol, misalnya: -1, -2, -3, dan seterusnya. Bilangan nol adalah bilangan bulat yang nilainya sama dengan nol.\n\n**Contoh bilangan bulat:**\n\n- 2 (bilangan bulat positif)\n- -5 (bilangan bulat negatif)\n- 0 (bilangan nol)\n\n---\n\n## Sifat-Sifat Bilangan Bulat\n\nBilangan bulat memiliki beberapa sifat yang perlu kita ketahui. Sifat-sifat ini sangat penting untuk melakukan operasi hitung dan perbandingan pada bilangan bulat.\n\n### 1. Sifat Penjumlahan dan Pengurangan Bilangan Bulat\n\nJika kita menjumlahkan dua bilangan bulat dengan tanda yang berbeda (positif dan negatif), maka kita dapat mengurangi nilai mutlak kedua bilangan tersebut.\n\n**Contoh:**\n\n- 2 + (-3) = 2 – 3 = -1\n\nHal yang sama juga berlaku untuk pengurangan bilangan bulat.\n\n**Contoh:**\n\n- 4 – (-2) = 4 + 2 = 6\n\nJika kita menjumlahkan atau mengurangkan bilangan bulat dengan tanda yang sama (dua bilangan positif atau dua bilangan negatif), maka hasilnya akan memiliki tanda yang sama dengan bilangan tersebut.\n\n**Contoh:**\n\n- -5 + (-3) = -8\n- 3 – 2 = 1\n\n\n### 2. Sifat Perkalian dan Pembagian Bilangan Bulat\n\nPerkalian dua bilangan bulat yang memiliki tanda yang sama akan menghasilkan bilangan positif.\n\n**Contoh:**\n\n- 3 × 2 = 6\n- -4 × (-3) = 12\n\nNamun, perkalian dua bilangan bulat yang memiliki tanda yang berbeda akan menghasilkan bilangan negatif.\n\n**Contoh:**\n\n- 2 × (-3) = -6\n- -4 × 3 = -12\n\nPerkalian bilangan bulat dengan nol hasilnya akan selalu nol.\n\n**Contoh:**\n\n- 0 × 5 = 0\n- 5 × 0 = 0\n\nPembagian dua bilangan bulat yang memiliki tanda yang sama akan menghasilkan bilangan positif.\n\n**Contoh:**\n\n- 8 / 4 = 2\n- -10 / (-2) = 5\n\nSedangkan, pembagian dua bilangan bulat yang memiliki tanda yang berbeda akan menghasilkan bilangan negatif.\n\n**Contoh:**\n\n- 10 / (-2) = -5\n- -8 / 4 = -2\n\n\n### 3. Sifat Perbandingan Bilangan Bulat\n\nDalam perbandingan dua bilangan bulat, bilangan bulat yang lebih besar ditempatkan di sebelah kanan bilangan bulat yang lebih kecil.\n\n**Contoh:**\n\n- 5 > 3\n- -7 < -2\n\nDua bilangan bulat dikatakan sama jika nilai mutlaknya sama.\n\n**Contoh:**\n\n- |4| = |4|\n- |-5| = |5|\n\n---\n\n## Operasi Hitung pada Bilangan Bulat\n\nOperasi hitung pada bilangan bulat dapat dilakukan dengan mengikuti aturan-aturan yang telah disebutkan sebelumnya. Berikut adalah langkah-langkah untuk melakukan operasi hitung pada bilangan bulat:\n\n### 1. Penjumlahan dan Pengurangan Bilangan Bulat\n\nUntuk menjumlahkan atau mengurangkan bilangan bulat, langkah-langkahnya adalah:\n\n1. Tambahkan atau kurangkan nilai mutlak kedua bilangan.\n2. Tentukan tanda hasil penjumlahan atau pengurangan sesuai dengan aturan sifat-sifat bilangan bulat yang sudah dijelaskan sebelumnya.\n\n\n### 2. Perkalian dan Pembagian Bilangan Bulat\n\nUntuk mengalikan atau membagi bilangan bulat, langkah-langkahnya adalah:\n\n1. Perkalian: kalikan nilai mutlak kedua bilangan.\n2. Pembagian: bagi nilai mutlak kedua bilangan.\n3. Tentukan tanda hasil perkalian atau pembagian sesuai dengan aturan sifat-sifat bilangan bulat yang sudah dijelaskan sebelumnya.\n\n\n---\n\n## Penyelesaian Masalah dengan Bilangan Bulat\n\nMasalah yang berkaitan dengan bilangan bulat dapat diselesaikan dengan menggunakan operasi hitung pada bilangan bulat.\n\n### **Contoh Masalah:**\n\nSeorang siswa meminjam buku di perpustakaan selama 7 hari. Setelah itu, dia memperpanjang peminjaman selama 3 hari. Berapa total hari siswa tersebut meminjam buku?\n\n### **Penyelesaian:**\n\nJumlah hari peminjaman buku adalah hasil penjumlahan 7 hari dan 3 hari.\n\n7 + 3 = 10\n\nJadi, siswa tersebut meminjam buku selama **10 hari**.\n\nMelalui contoh masalah di atas, kita dapat melihat bahwa operasi hitung pada bilangan bulat memungkinkan kita untuk menyelesaikan masalah sehari-hari dengan mudah dan akurat.\n\n\n---\n\n## Kesimpulan\n\nBilangan bulat merupakan jenis bilangan yang terdiri dari bilangan bulat positif, bilangan bulat negatif, dan bilangan nol. Bilangan bulat memiliki sifat-sifat seperti penjumlahan, pengurangan, perkalian, pembagian, dan perbandingan yang penting untuk melakukan operasi hitung dan menyelesaikan masalah dengan bilangan bulat.\n\nDalam praktiknya, operasi hitung pada bilangan bulat dapat dilakukan dengan mengikuti aturan sifat-sifat bilangan bulat. Oleh karena itu, pemahaman yang baik tentang bilangan bulat sangat penting dalam matematika dan kehidupan sehari-hari.",
            example: 'Contoh soal untuk Video 1.',
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
          }
        ]
      },
      { 
        id: 2, 
        title: 'Aljabar', 
        color: 'bg-green-500', 
        nextId: 3,
        descriptions: {
          explanation: "## Pengertian Aljabar\n\nAljabar adalah salah satu cabang matematika yang mempelajari simbol-simbol dan operasi yang dilakukan pada simbol-simbol tersebut. Konsep aljabar seringkali diperkenalkan kepada siswa pada jenjang sekolah menengah, dan menjadi dasar dalam pembelajaran matematika lebih lanjut.\n\n---\n\n## Variabel dalam Aljabar\n\nSalah satu konsep dasar dalam aljabar adalah variabel. Variabel adalah simbol yang mewakili suatu nilai yang dapat berubah-ubah. Variabel seringkali dinyatakan dengan huruf-huruf seperti x atau y. Pada awalnya, nilai variabel mungkin tidak diketahui, namun dapat ditemukan melalui penyelesaian persamaan atau pertidaksamaan.\n\n---\n\n## Persamaan dalam Aljabar\n\nPersamaan adalah suatu pernyataan yang menghubungkan dua atau lebih variabel dengan tanda sama dengan (=). Persamaan seringkali digunakan untuk menemukan nilai variabel yang memenuhi hubungan tersebut. Sebagai contoh, perhatikan persamaan berikut:\n\n**x + 3 = 7**\n\nPersamaan di atas berarti bahwa jumlah x dengan angka 3 adalah sama dengan angka 7. Untuk menemukan nilai x, kita dapat melakukan operasi pada kedua sisi persamaan tersebut. Dalam hal ini, kita dapat mengurangkan 3 dari kedua sisi persamaan untuk mendapatkan:\n\n**x = 4**\n\nJadi, nilai x dalam persamaan tersebut adalah 4. Dalam aljabar, kita juga dapat menggantikan variabel dengan bilangan atau ekspresi lain yang memiliki nilai yang sama dengan variabel tersebut. Misalnya, jika x = 4, maka persamaan tersebut dapat ditulis sebagai:\n\n**4 + 3 = 7**\n\nYang tentunya benar.\n\n---\n\n## Pertidaksamaan dalam Aljabar\n\nPertidaksamaan adalah suatu pernyataan yang menghubungkan dua atau lebih variabel dengan tanda tidak sama dengan (≠), lebih besar dari (>), lebih kecil dari (<), lebih besar sama dengan (≥), atau lebih kecil sama dengan (≤). Pertidaksamaan digunakan untuk membandingkan nilai variabel atau ekspresi yang tidak sama. Sebagai contoh, perhatikan pertidaksamaan berikut:\n\n**x + 2 > 5**\n\nPertidaksamaan di atas berarti bahwa jumlah x dengan angka 2 lebih besar dari angka 5. Untuk menemukan nilai x yang memenuhi pertidaksamaan tersebut, kita perlu melakukan operasi pada kedua sisi pertidaksamaan. Dalam hal ini, kita dapat mengurangi 2 dari kedua sisi pertidaksamaan untuk mendapatkan:\n\n**x > 3**\n\nArtinya, nilai x harus lebih besar dari 3 agar pertidaksamaan tersebut menjadi benar. Kita juga dapat membandingkan variabel atau ekspresi dengan angka atau ekspresi lain yang memiliki nilai yang tidak sama dengan variabel tersebut.\n\n---\n\n## Penyelesaian Masalah dalam Aljabar\n\nAljabar dapat digunakan untuk menjawab berbagai macam masalah matematika yang melibatkan variabel atau ekspresi. Pada dasarnya, penyelesaian masalah yang berkaitan dengan aljabar melibatkan langkah-langkah sebagai berikut:\n\n1. Identifikasi variabel yang relevan dalam masalah.\n2. Buat persamaan atau pertidaksamaan yang menggambarkan hubungan antara variabel tersebut.\n3. Selesaikan persamaan atau pertidaksamaan untuk menemukan nilai variabel yang memenuhi hubungan tersebut.\n4. Verifikasi solusi dengan menggantikan nilai variabel dalam masalah asli dan memastikan bahwa hubungan tetap terpenuhi.\n\n**Contoh Masalah:**\n\nJika kita memiliki sebuah masalah yang meminta kita untuk mencari bilangan yang ketika ditambahkan dengan 5 hasilnya adalah 12, kita dapat mengidentifikasi variabel **x** yang mewakili bilangan tersebut. Kemudian, kita dapat menyusun persamaan:\n\n**x + 5 = 12**\n\nSelesaikan dengan mengurangi 5 dari kedua sisi:\n\n**x = 7**\n\nUntuk memverifikasi solusi, kita dapat menggantikan x dengan 7 dalam persamaan asli dan memastikan bahwa hubungan tetap terpenuhi:\n\n**7 + 5 = 12** ✅\n\nDalam penyelesaian masalah yang lebih kompleks, kita seringkali perlu menggunakan lebih dari satu persamaan atau pertidaksamaan untuk menemukan nilai variabel yang memenuhi hubungan-hubungan tersebut. Kemampuan dalam menggunakan konsep aljabar dan menyelesaikan masalah yang bersifat aljabarik akan sangat berguna dalam berbagai bidang seperti matematika, fisika, dan ekonomi.\n\n---\n\n## Kesimpulan\n\nAljabar adalah cabang matematika yang mempelajari simbol-simbol dan operasi yang dilakukan pada simbol-simbol tersebut. Konsep dasar dalam aljabar meliputi variabel, persamaan, dan pertidaksamaan. Dengan menggunakan konsep ini, kita dapat menyelesaikan berbagai masalah matematika yang melibatkan nilai yang dapat berubah-ubah.\n",
          example: 'Contoh soal untuk Video 2.',
        }, 
        youtube: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' ,
         code: 'MATH123'
      },
    { 
      id: 3,
      title: 'Linear',
      color: 'bg-purple-500',
      nextId: 4,
      youtube: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      descriptions: {
        explanation: 'Penjelasan untuk Video 3.',
        example: 'Contoh soal untuk Video 3.',
      },
      code: 'MATH123'
      
    },
    { 
      id: 4, 
      title: 'Perbandingan', 
      color: 'bg-yellow-500', 
      nextId: 5,
      youtube: 'https://www.youtube.com/embed/L_jWHffIx5E',
      descriptions: {
        explanation: "Pengertian Perbandingan\nPerbandingan adalah cara untuk menyatakan dua ukuran yang berbeda dengan menggunakan tanda perbandingan. Dalam matematika, tanda perbandingan yang biasa digunakan adalah “:” atau bilangan pecahan. Misalnya, jika terdapat 2 buah apel dan 3 buah jeruk, maka perbandingan jumlah apel ke jumlah jeruk dapat ditulis sebagai 2:3 atau 2/3.\n\nPerbandingan Senilai\nPerbandingan senilai adalah perbandingan dua ukuran yang nilainya berubah-ubah secara teratur, yaitu berbanding lurus. Dalam perbandingan senilai, kali angka pertama dengan bilangan tertentu akan menghasilkan angka kedua. Misalnya, jika terdapat perbandingan 2:4, maka ketika angka pertama dikalikan dengan 2, akan menghasilkan angka kedua. Dalam contoh ini, 2 x 2 = 4.\nUntuk menyelesaikan masalah yang berkaitan dengan perbandingan senilai, kita dapat menggunakan konsep rasio. Rasio adalah perbandingan dua angka atau lebih dalam bentuk pecahan. Misalnya, rasio 2:4 dapat ditulis sebagai 2/4 atau 1/2.\n\nPerbandingan Berbalik Nilai\nPerbandingan berbalik nilai adalah perbandingan dua ukuran yang nilainya berubah-ubah secara teratur, yaitu berbanding terbalik. Dalam perbandingan berbalik nilai, hasil perkalian angka pertama dengan angka kedua akan selalu menghasilkan angka tetap. Misalnya, jika terdapat perbandingan 2:8, maka ketika angka pertama dikalikan dengan angka kedua, akan selalu menghasilkan 16. Dalam contoh ini, 2 x 8 = 16.\nUntuk menyelesaikan masalah yang berkaitan dengan perbandingan berbalik nilai, kita dapat menggunakan konsep proporsi. Proporsi adalah persamaan dua perbandingan yang memiliki hubungan berbalik nilai. Misalnya, jika terdapat proporsi a:b = c:d, maka a x d = b x c.\n\nKesimpulan\nMateri Matematika Kelas 7 Bab 4 mengajarkan tentang perbandingan senilai dan perbandingan berbalik nilai. Perbandingan senilai adalah perbandingan dua ukuran yang nilainya berubah-ubah secara teratur, sementara perbandingan berbalik nilai adalah perbandingan dua ukuran yang nilainya berubah-ubah secara terbalik. Dalam menyelesaikan masalah yang berkaitan dengan perbandingan senilai, kita dapat menggunakan konsep rasio, sementara dalam menyelesaikan masalah yang berkaitan dengan perbandingan berbalik nilai, kita dapat menggunakan konsep proporsi.",
        example: 'Contoh soal untuk Video 4.',
      }, 
      explanation: " ",
        code: 'MATH113'
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
         example1:'contohd'
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

  getCodeById(id: number): string | undefined {
    return this.data.value.find(item => item.id === id)?.code;
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

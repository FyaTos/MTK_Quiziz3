import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-quzz-materi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-quzz-materi.component.html',
  styleUrl: './menu-quzz-materi.component.css'
})
export class MenuQuzzMateriComponent { 
    quizService = inject(DataService);
    route = inject(ActivatedRoute);
    router = inject(Router);  
  
    quizOptions: string[] = [];
    question = '';
    correctAnswer = '';
    timeLeft = 25;
    interval: any;
    selectedQuestions: any[] = [];
    currentIndex = 0;
    quizFinished = false;
    userAnswers: { question: string; selected: string; correct: string; isCorrect: boolean }[] = [];
    finalScore = 0;
    quizTitle = '';
    quizNotFound = false;
    minScore = 10;  
    nextQuizId: number | null = null; 
    progress = 0; // Variabel untuk menyimpan progress kuis

    constructor() {
      this.route.paramMap.subscribe(params => {
        const quizId = Number(params.get('id'));
        this.loadQuestions(quizId);
      });
    }
    
    loadQuestions(quizId: number) {
      this.quizService.getData().subscribe(data => {
        const quizData = data.find(q => q.id === quizId);
  
        if (quizData) {
          this.selectedQuestions = this.getRandomQuestions(quizData.quizzes, 20);
          this.quizTitle = quizData.name;
          this.currentIndex = 0;
          this.quizFinished = false;
          this.finalScore = 0;
          this.userAnswers = [];
          this.quizNotFound = false;
          this.nextQuizId = quizData.nextId || null; 
          this.progress = 0; // Reset progress saat memulai kuis baru
          this.loadQuestion();
        } else {
          this.quizNotFound = true;
        }
      });
    }
  
    getRandomQuestions(questions: any[], count: number): any[] {
      return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
    }
  
    loadQuestion() {
      if (this.currentIndex < this.selectedQuestions.length) {
        const quiz = this.selectedQuestions[this.currentIndex];
        this.question = quiz.question;
        this.correctAnswer = quiz.correctAnswer;
        this.quizOptions = this.shuffleOptions([quiz.correctAnswer, ...quiz.incorrectAnswers]);
        this.startTimer();
        this.updateProgress(); // Update progress setiap kali pertanyaan dimuat
      } else {
        this.quizFinished = true;
      }
    }
  
    shuffleOptions(options: string[]): string[] {
      return options.sort(() => Math.random() - 0.5);
    }
  
    startTimer() {
      this.timeLeft = 25;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.nextQuestion();
        }
      }, 1000);
    }
  
    checkAnswer(selected: string) {
      const isCorrect = selected === this.correctAnswer;
      
      this.userAnswers.push({
        question: this.question,
        selected: selected,
        correct: this.correctAnswer,
        isCorrect: isCorrect
      });
  
      if (isCorrect) {
        this.finalScore += 5;
      }
   
      if (this.currentIndex < this.selectedQuestions.length - 1) {
        this.nextQuestion();
      } else {
        this.quizFinished = true;
        this.handleQuizCompletion();
      }
    } 
  
    nextQuestion() {
      clearInterval(this.interval);
      this.currentIndex++;
  
      if (this.currentIndex < this.selectedQuestions.length) {
        this.loadQuestion();
      } else {
        this.quizFinished = true;
        this.handleQuizCompletion();
      }
    }
  
    handleQuizCompletion() {
      if (this.finalScore >= this.minScore) {
        alert('Selamat! Anda lolos dengan skor ' + this.finalScore);
        if (this.nextQuizId) {
          alert('Kode untuk materi berikutnya: ' + this.nextQuizId);
        }
      } else {
        alert('Maaf, skor Anda kurang dari 70. Silakan coba lagi!');
        this.resetGame();
      }
    }
  
    resetGame() {
      clearInterval(this.interval);
      this.loadQuestions(Number(this.route.snapshot.paramMap.get('id')));
    }
  
    getOptionLetter(option: string): string {
      const index = this.quizOptions.indexOf(option);
      return ['A', 'B', 'C', 'D'][index] || '';
    }
   
    goToDashboard() {
      this.router.navigate(['/pemilihan-materi']); 
    }

    // Fungsi untuk menghitung dan memperbarui progress
    updateProgress() {
      this.progress = ((this.currentIndex + 1) / this.selectedQuestions.length) * 100;
    }
}
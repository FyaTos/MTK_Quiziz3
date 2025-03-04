import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { marked } from 'marked'; // Import marked

@Component({
  selector: 'app-menu-soal-materi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-soal-materi.component.html',
  styleUrl: './menu-soal-materi.component.css',
})
export class MenuSoalMateriComponent {
  dataService = inject(DataService);
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);

  selectedVideo: any;
  sanitizedUrl!: SafeResourceUrl; // Definisikan properti sanitizedUrl
  id!: number;
  activeIndex: number | null = null;

  descriptions: { buttonText: string; text: SafeHtml }[] = [
    { buttonText: 'Penjelasan', text: '' },
    { buttonText: 'Contoh Soal', text: '' },
  ];

  toggleDescription(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  // Fungsi untuk mengonversi Markdown ke HTML (asinkron)
  async convertMarkdownToHtml(markdown: string): Promise<SafeHtml> {
    const html = await marked.parse(markdown); // Tunggu Promise selesai
    return this.sanitizer.bypassSecurityTrustHtml(html); // Jadikan HTML aman
  }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.id = Number(params['id']);
      console.log('Received ID:', this.id);

      this.selectedVideo = this.dataService.getVideoById(this.id);

      if (this.selectedVideo) {
        // Konversi URL YouTube ke URL yang aman
        const youtubeUrl = this.selectedVideo.youtube.replace('watch?v=', 'embed/');
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);

        // Konversi teks Markdown ke HTML (gunakan await)
        this.descriptions = [
          { buttonText: 'Penjelasan', text: await this.convertMarkdownToHtml(this.selectedVideo.descriptions.explanation) },
          { buttonText: 'Contoh Soal', text: await this.convertMarkdownToHtml(this.selectedVideo.descriptions.example) },
        ];
      } else {
        console.error('Video not found for ID:', this.id);
      }
    });
  }
}
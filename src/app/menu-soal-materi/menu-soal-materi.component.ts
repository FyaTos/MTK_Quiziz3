import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-soal-materi',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu-soal-materi.component.html',
  styleUrl: './menu-soal-materi.component.css',
})
export class MenuSoalMateriComponent {
  dataService = inject(DataService);
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);

  selectedVideo: any;
  sanitizedUrl!: SafeResourceUrl;
  id!: number;
  activeIndex: number | null = null;

  descriptions = [
    { buttonText: 'Penjelasan', text: '' },
    { buttonText: 'Contoh Soal', text: '' },
  ];

  toggleDescription(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      console.log('Received ID:', this.id);

      this.selectedVideo = this.dataService.getVideoById(this.id);

      if (this.selectedVideo) {
        const youtubeUrl = this.selectedVideo.youtube.replace('watch?v=', 'embed/');
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
        console.log('Sanitized URL:', this.sanitizedUrl);
 
        this.descriptions = [
          { buttonText: 'Penjelasan', text: this.selectedVideo.descriptions.explanation },
          { buttonText: 'Contoh Soal', text: this.selectedVideo.descriptions.example },
        ];
      } else {
        console.error('Video not found for ID:', this.id);
      }
    });
  }
}

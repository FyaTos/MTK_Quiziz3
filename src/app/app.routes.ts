import { Routes } from '@angular/router';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuPemilihanMateriComponent } from './menu-pemilihan-materi/menu-pemilihan-materi.component';
import { MenuSoalMateriComponent } from './menu-soal-materi/menu-soal-materi.component';
import { MenuQuzzMateriComponent } from './menu-quzz-materi/menu-quzz-materi.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MenuHomeComponent },
  { path: 'pemilihan-materi', component: MenuPemilihanMateriComponent },
  { path: 'menu-soal-materi', component: MenuSoalMateriComponent },
  { path: 'menu-soal-materi/:id', component: MenuSoalMateriComponent },
  { path: 'quiziz', component: MenuQuzzMateriComponent },
  { path: 'quiziz/:id', component: MenuQuzzMateriComponent },
  { path: '**', redirectTo: 'home' }  
];

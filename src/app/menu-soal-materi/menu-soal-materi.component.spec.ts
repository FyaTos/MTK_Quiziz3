import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSoalMateriComponent } from './menu-soal-materi.component';

describe('MenuSoalMateriComponent', () => {
  let component: MenuSoalMateriComponent;
  let fixture: ComponentFixture<MenuSoalMateriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSoalMateriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSoalMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

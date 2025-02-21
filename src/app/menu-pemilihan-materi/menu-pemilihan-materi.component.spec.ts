import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPemilihanMateriComponent } from './menu-pemilihan-materi.component';

describe('MenuPemilihanMateriComponent', () => {
  let component: MenuPemilihanMateriComponent;
  let fixture: ComponentFixture<MenuPemilihanMateriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPemilihanMateriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPemilihanMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

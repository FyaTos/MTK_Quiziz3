import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQuzzMateriComponent } from './menu-quzz-materi.component';

describe('MenuQuzzMateriComponent', () => {
  let component: MenuQuzzMateriComponent;
  let fixture: ComponentFixture<MenuQuzzMateriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuQuzzMateriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuQuzzMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

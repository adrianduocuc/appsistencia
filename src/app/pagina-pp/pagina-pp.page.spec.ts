import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPPPage } from './pagina-pp.page';

describe('PaginaPPPage', () => {
  let component: PaginaPPPage;
  let fixture: ComponentFixture<PaginaPPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

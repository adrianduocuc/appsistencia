import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pageerror404Page } from './pageerror404.page';

describe('Pageerror404Page', () => {
  let component: Pageerror404Page;
  let fixture: ComponentFixture<Pageerror404Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pageerror404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

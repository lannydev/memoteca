import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamentosComponent } from './criar-pensamentos.component';

describe('CriarPensamentosComponent', () => {
  let component: CriarPensamentosComponent;
  let fixture: ComponentFixture<CriarPensamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPensamentosComponent]
    });
    fixture = TestBed.createComponent(CriarPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

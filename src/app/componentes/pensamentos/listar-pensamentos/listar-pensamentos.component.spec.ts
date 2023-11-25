import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentosComponent } from './listar-pensamentos.component';

describe('ListarPensamentosComponent', () => {
  let component: ListarPensamentosComponent;
  let fixture: ComponentFixture<ListarPensamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPensamentosComponent]
    });
    fixture = TestBed.createComponent(ListarPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

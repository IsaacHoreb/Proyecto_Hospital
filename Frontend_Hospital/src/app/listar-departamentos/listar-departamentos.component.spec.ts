import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDepartamentosComponent } from './listar-departamentos.component';

describe('ListarDepartamentosComponent', () => {
  let component: ListarDepartamentosComponent;
  let fixture: ComponentFixture<ListarDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDepartamentosComponent]
    });
    fixture = TestBed.createComponent(ListarDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDepartamentosComponent } from './actualizar-departamentos.component';

describe('ActualizarDepartamentosComponent', () => {
  let component: ActualizarDepartamentosComponent;
  let fixture: ComponentFixture<ActualizarDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDepartamentosComponent]
    });
    fixture = TestBed.createComponent(ActualizarDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

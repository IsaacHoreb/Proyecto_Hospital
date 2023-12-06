import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPacientesComponent } from './actualizar-pacientes.component';

describe('ActualizarPacientesComponent', () => {
  let component: ActualizarPacientesComponent;
  let fixture: ComponentFixture<ActualizarPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPacientesComponent]
    });
    fixture = TestBed.createComponent(ActualizarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

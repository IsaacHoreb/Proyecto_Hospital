import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPacientesComponent } from './detalles-pacientes.component';

describe('DetallesPacientesComponent', () => {
  let component: DetallesPacientesComponent;
  let fixture: ComponentFixture<DetallesPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPacientesComponent]
    });
    fixture = TestBed.createComponent(DetallesPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

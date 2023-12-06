import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarPacientesComponent } from './registar-pacientes.component';

describe('RegistarPacientesComponent', () => {
  let component: RegistarPacientesComponent;
  let fixture: ComponentFixture<RegistarPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarPacientesComponent]
    });
    fixture = TestBed.createComponent(RegistarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

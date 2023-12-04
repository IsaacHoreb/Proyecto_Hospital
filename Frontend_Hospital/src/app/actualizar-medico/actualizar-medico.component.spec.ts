import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMedicoComponent } from './actualizar-medico.component';

describe('ActualizarMedicoComponent', () => {
  let component: ActualizarMedicoComponent;
  let fixture: ComponentFixture<ActualizarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarMedicoComponent]
    });
    fixture = TestBed.createComponent(ActualizarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

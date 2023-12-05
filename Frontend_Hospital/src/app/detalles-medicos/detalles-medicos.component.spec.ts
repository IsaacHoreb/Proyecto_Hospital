import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMedicosComponent } from './detalles-medicos.component';

describe('DetallesMedicosComponent', () => {
  let component: DetallesMedicosComponent;
  let fixture: ComponentFixture<DetallesMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesMedicosComponent]
    });
    fixture = TestBed.createComponent(DetallesMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

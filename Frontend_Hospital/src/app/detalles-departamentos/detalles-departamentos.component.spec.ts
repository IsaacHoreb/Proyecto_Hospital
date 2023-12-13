import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDepartamentosComponent } from './detalles-departamentos.component';

describe('DetallesDepartamentosComponent', () => {
  let component: DetallesDepartamentosComponent;
  let fixture: ComponentFixture<DetallesDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDepartamentosComponent]
    });
    fixture = TestBed.createComponent(DetallesDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

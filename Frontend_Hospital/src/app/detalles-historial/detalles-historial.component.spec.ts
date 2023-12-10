import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHistorialComponent } from './detalles-historial.component';

describe('DetallesHistorialComponent', () => {
  let component: DetallesHistorialComponent;
  let fixture: ComponentFixture<DetallesHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesHistorialComponent]
    });
    fixture = TestBed.createComponent(DetallesHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

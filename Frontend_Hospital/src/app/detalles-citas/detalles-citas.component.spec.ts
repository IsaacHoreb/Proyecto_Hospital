import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCitasComponent } from './detalles-citas.component';

describe('DetallesCitasComponent', () => {
  let component: DetallesCitasComponent;
  let fixture: ComponentFixture<DetallesCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesCitasComponent]
    });
    fixture = TestBed.createComponent(DetallesCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

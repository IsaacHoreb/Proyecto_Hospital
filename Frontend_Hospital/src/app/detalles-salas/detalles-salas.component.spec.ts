import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSalasComponent } from './detalles-salas.component';

describe('DetallesSalasComponent', () => {
  let component: DetallesSalasComponent;
  let fixture: ComponentFixture<DetallesSalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesSalasComponent]
    });
    fixture = TestBed.createComponent(DetallesSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

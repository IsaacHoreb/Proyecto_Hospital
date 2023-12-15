import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSalasComponent } from './actualizar-salas.component';

describe('ActualizarSalasComponent', () => {
  let component: ActualizarSalasComponent;
  let fixture: ComponentFixture<ActualizarSalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarSalasComponent]
    });
    fixture = TestBed.createComponent(ActualizarSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSalasComponent } from './registrar-salas.component';

describe('RegistrarSalasComponent', () => {
  let component: RegistrarSalasComponent;
  let fixture: ComponentFixture<RegistrarSalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSalasComponent]
    });
    fixture = TestBed.createComponent(RegistrarSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDepartamentosComponent } from './registrar-departamentos.component';

describe('RegistrarDepartamentosComponent', () => {
  let component: RegistrarDepartamentosComponent;
  let fixture: ComponentFixture<RegistrarDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarDepartamentosComponent]
    });
    fixture = TestBed.createComponent(RegistrarDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

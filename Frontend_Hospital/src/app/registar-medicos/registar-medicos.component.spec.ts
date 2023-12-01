import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarMedicosComponent } from './registar-medicos.component';

describe('RegistarMedicosComponent', () => {
  let component: RegistarMedicosComponent;
  let fixture: ComponentFixture<RegistarMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarMedicosComponent]
    });
    fixture = TestBed.createComponent(RegistarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

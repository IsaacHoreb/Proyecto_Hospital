import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarCitasComponent } from './registar-citas.component';

describe('RegistarCitasComponent', () => {
  let component: RegistarCitasComponent;
  let fixture: ComponentFixture<RegistarCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarCitasComponent]
    });
    fixture = TestBed.createComponent(RegistarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

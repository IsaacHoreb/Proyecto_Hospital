import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarHistorialComponent } from './registar-historial.component';

describe('RegistarHistorialComponent', () => {
  let component: RegistarHistorialComponent;
  let fixture: ComponentFixture<RegistarHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarHistorialComponent]
    });
    fixture = TestBed.createComponent(RegistarHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

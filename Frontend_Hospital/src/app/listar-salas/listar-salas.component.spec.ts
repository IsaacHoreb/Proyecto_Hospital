import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSalasComponent } from './listar-salas.component';

describe('ListarSalasComponent', () => {
  let component: ListarSalasComponent;
  let fixture: ComponentFixture<ListarSalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSalasComponent]
    });
    fixture = TestBed.createComponent(ListarSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

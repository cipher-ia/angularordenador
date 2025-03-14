import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOrdenadorComponent } from './formulario-ordenador.component';

describe('FormularioOrdenadorComponent', () => {
  let component: FormularioOrdenadorComponent;
  let fixture: ComponentFixture<FormularioOrdenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioOrdenadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioOrdenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

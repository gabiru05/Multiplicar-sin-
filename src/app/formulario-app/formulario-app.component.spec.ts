import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAppComponent } from './formulario-app.component';

describe('FormularioAppComponent', () => {
  let component: FormularioAppComponent;
  let fixture: ComponentFixture<FormularioAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

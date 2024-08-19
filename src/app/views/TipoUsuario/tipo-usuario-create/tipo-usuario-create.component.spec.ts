import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioCreateComponent } from './tipo-usuario-create.component';

describe('TipoUsuarioCreateComponent', () => {
  let component: TipoUsuarioCreateComponent;
  let fixture: ComponentFixture<TipoUsuarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoUsuarioCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoUsuarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

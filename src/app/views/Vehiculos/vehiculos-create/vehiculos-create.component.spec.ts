import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosCreateComponent } from './vehiculos-create.component';

describe('VehiculosCreateComponent', () => {
  let component: VehiculosCreateComponent;
  let fixture: ComponentFixture<VehiculosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

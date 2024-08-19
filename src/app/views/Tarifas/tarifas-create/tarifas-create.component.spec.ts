import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasCreateComponent } from './tarifas-create.component';

describe('TarifasCreateComponent', () => {
  let component: TarifasCreateComponent;
  let fixture: ComponentFixture<TarifasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

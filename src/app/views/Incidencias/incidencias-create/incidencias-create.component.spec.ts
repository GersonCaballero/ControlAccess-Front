import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasCreateComponent } from './incidencias-create.component';

describe('IncidenciasCreateComponent', () => {
  let component: IncidenciasCreateComponent;
  let fixture: ComponentFixture<IncidenciasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

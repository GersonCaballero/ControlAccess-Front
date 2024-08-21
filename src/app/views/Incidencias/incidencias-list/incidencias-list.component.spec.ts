import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasListComponent } from './incidencias-list.component';

describe('IncidenciasListComponent', () => {
  let component: IncidenciasListComponent;
  let fixture: ComponentFixture<IncidenciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

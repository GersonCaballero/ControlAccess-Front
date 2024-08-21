import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesosCreateComponent } from './accesos-create.component';

describe('AccesosCreateComponent', () => {
  let component: AccesosCreateComponent;
  let fixture: ComponentFixture<AccesosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

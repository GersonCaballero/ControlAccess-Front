import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesCreateComponent } from './visitantes-create.component';

describe('VisitantesCreateComponent', () => {
  let component: VisitantesCreateComponent;
  let fixture: ComponentFixture<VisitantesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitantesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitantesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

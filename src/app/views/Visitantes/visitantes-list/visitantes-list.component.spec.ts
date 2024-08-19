import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesListComponent } from './visitantes-list.component';

describe('VisitantesListComponent', () => {
  let component: VisitantesListComponent;
  let fixture: ComponentFixture<VisitantesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitantesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitantesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

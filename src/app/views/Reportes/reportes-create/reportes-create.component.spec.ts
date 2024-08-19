import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesCreateComponent } from './reportes-create.component';

describe('ReportesCreateComponent', () => {
  let component: ReportesCreateComponent;
  let fixture: ComponentFixture<ReportesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

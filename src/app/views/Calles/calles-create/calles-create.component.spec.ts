import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallesCreateComponent } from './calles-create.component';

describe('CallesCreateComponent', () => {
  let component: CallesCreateComponent;
  let fixture: ComponentFixture<CallesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

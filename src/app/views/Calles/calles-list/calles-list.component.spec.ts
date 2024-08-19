import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallesListComponent } from './calles-list.component';

describe('CallesListComponent', () => {
  let component: CallesListComponent;
  let fixture: ComponentFixture<CallesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

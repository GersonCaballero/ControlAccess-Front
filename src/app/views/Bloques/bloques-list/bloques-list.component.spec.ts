import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquesListComponent } from './bloques-list.component';

describe('BloquesListComponent', () => {
  let component: BloquesListComponent;
  let fixture: ComponentFixture<BloquesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloquesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquesCreateComponent } from './bloques-create.component';

describe('BloquesCreateComponent', () => {
  let component: BloquesCreateComponent;
  let fixture: ComponentFixture<BloquesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloquesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloquesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

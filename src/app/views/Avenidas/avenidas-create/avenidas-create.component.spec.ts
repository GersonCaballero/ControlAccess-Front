import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AvenidasCreateComponent } from './avenidas-create.component';

describe('AvenidasCreateComponent', () => {
  let component: AvenidasCreateComponent;
  let fixture: ComponentFixture<AvenidasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvenidasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvenidasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

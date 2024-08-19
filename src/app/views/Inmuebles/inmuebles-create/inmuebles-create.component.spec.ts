import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesCreateComponent } from './inmuebles-create.component';

describe('InmueblesCreateComponent', () => {
  let component: InmueblesCreateComponent;
  let fixture: ComponentFixture<InmueblesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmueblesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

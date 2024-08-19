import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesListComponent } from './inmuebles-list.component';

describe('InmueblesListComponent', () => {
  let component: InmueblesListComponent;
  let fixture: ComponentFixture<InmueblesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmueblesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

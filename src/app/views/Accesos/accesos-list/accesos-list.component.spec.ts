import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesosListComponent } from './accesos-list.component';

describe('AccesosListComponent', () => {
  let component: AccesosListComponent;
  let fixture: ComponentFixture<AccesosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

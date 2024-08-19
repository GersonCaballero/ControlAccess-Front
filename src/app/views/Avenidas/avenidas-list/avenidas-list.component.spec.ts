import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenidasListComponent } from './avenidas-list.component';

describe('AvenidasListComponent', () => {
  let component: AvenidasListComponent;
  let fixture: ComponentFixture<AvenidasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvenidasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvenidasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencialListComponent } from './residencial-list.component';

describe('ResidencialListComponent', () => {
  let component: ResidencialListComponent;
  let fixture: ComponentFixture<ResidencialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencialListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidencialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

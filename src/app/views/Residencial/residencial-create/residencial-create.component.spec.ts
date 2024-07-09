import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencialCreateComponent } from './residencial-create.component';

describe('ResidencialCreateComponent', () => {
  let component: ResidencialCreateComponent;
  let fixture: ComponentFixture<ResidencialCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencialCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidencialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

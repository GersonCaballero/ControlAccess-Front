import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasCreateComponent } from './casas-create.component';

describe('CasasCreateComponent', () => {
  let component: CasasCreateComponent;
  let fixture: ComponentFixture<CasasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

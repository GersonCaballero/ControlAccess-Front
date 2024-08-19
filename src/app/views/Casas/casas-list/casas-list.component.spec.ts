import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasListComponent } from './casas-list.component';

describe('CasasListComponent', () => {
  let component: CasasListComponent;
  let fixture: ComponentFixture<CasasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

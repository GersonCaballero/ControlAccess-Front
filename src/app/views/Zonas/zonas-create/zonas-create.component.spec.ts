import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasCreateComponent } from './zonas-create.component';

describe('ZonasCreateComponent', () => {
  let component: ZonasCreateComponent;
  let fixture: ComponentFixture<ZonasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

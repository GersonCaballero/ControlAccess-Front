import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasListComponent } from './zonas-list.component';

describe('ZonasListComponent', () => {
  let component: ZonasListComponent;
  let fixture: ComponentFixture<ZonasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesboxComponent } from './servicesbox.component';

describe('ServicesboxComponent', () => {
  let component: ServicesboxComponent;
  let fixture: ComponentFixture<ServicesboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

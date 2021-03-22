import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPageComponent } from './pay-page.component';

describe('PayPageComponent', () => {
  let component: PayPageComponent;
  let fixture: ComponentFixture<PayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

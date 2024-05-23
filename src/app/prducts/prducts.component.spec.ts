import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductsComponent } from './prducts.component';

describe('PrductsComponent', () => {
  let component: PrductsComponent;
  let fixture: ComponentFixture<PrductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrductsComponent]
    });
    fixture = TestBed.createComponent(PrductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

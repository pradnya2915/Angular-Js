import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBindingComponent } from './array-binding.component';

describe('ArrayBindingComponent', () => {
  let component: ArrayBindingComponent;
  let fixture: ComponentFixture<ArrayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

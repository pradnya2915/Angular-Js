import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindlingComponent } from './data-bindling.component';

describe('DataBindlingComponent', () => {
  let component: DataBindlingComponent;
  let fixture: ComponentFixture<DataBindlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

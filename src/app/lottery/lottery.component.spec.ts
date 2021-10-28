import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteryComponent } from './lottery.component';

describe('LoteryComponent', () => {
  let component: LoteryComponent;
  let fixture: ComponentFixture<LoteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

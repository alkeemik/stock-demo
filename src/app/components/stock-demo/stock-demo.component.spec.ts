import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDemoComponent } from './stock-demo.component';

describe('StockDemoComponent', () => {
  let component: StockDemoComponent;
  let fixture: ComponentFixture<StockDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

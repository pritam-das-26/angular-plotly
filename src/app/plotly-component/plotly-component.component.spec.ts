import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyComponentComponent } from './plotly-component.component';

describe('PlotlyComponentComponent', () => {
  let component: PlotlyComponentComponent;
  let fixture: ComponentFixture<PlotlyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlotlyComponentComponent]
    });
    fixture = TestBed.createComponent(PlotlyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

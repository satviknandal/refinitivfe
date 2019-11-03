import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTreeChartComponent } from './nodetree-chart.component';

describe('NodeTreeChartComponent', () => {
  let component: NodeTreeChartComponent;
  let fixture: ComponentFixture<NodeTreeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTreeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTreeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTreeMockChartComponent } from './nodetreemock-chart.component';

describe('NodeTreeMockChartComponent', () => {
  let component: NodeTreeMockChartComponent;
  let fixture: ComponentFixture<NodeTreeMockChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTreeMockChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTreeMockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

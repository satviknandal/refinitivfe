import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services';
declare var vis: any;

@Component({
  selector: 'app-nodetree-chart',
  templateUrl: './nodetree-chart.component.html',
  styleUrls: ['./nodetree-chart.component.scss']
})
export class NodeTreeChartComponent  implements OnInit {
  spinner: Boolean = false;

  constructor(
    private chartService: ChartService,
  ) {
  }

  ngOnInit() {
    let edges;
    this.spinner = true;
    this.chartService.getEdgesData().subscribe(res => {
      edges = res;
      let nodes;
      this.chartService.getEntitiesData().subscribe(data => {
          nodes = data;
          this.draw(nodes, edges);
        });
    });
  }

  getEdges() {
    this.chartService.getEdgesData().subscribe(res => res);
  }

  getEntities() {
    this.chartService.getEntitiesData().subscribe(res => res);
  }

 draw(nodes, edges) {
    const container = document.getElementById('mynetwork');
    const data = {
      nodes: nodes,
      edges: edges
    };
    const options = {
      nodes: {
        shape: 'dot',
        size: 16
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18
        },
        maxVelocity: 146,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: { iterations: 150 }
      }
    };
    const network = new vis.Network(container, data, options);
    this.spinner = false;
  }

}

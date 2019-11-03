import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartModel } from 'src/app/interfaces/chart.interface';
import {ChartService, LabelsService } from '../../services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: Observable<ChartModel>;
  appLabels;

  constructor(
    private chartService: ChartService,
    private labelsService: LabelsService
    ) {
    this.data = this.chartService.getChartsData();
  }

  ngOnInit() {
    this.getAppLabels();
  }

  getAppLabels() {
    this.labelsService.getAppLabels().subscribe(res => {
      this.appLabels = res;
    });
  }

}

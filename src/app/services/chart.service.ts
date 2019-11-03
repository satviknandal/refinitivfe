import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ChartService {

  constructor(
      private httpService: HttpService,
  ) {}

  public getChartsData() {
    const getChartUrl = '../assets/json/chart.json';
    return this.httpService.getRequest(getChartUrl, null, null, false, 'chart')
      .pipe(map((responseData) => responseData));
  }

  public getEdgesData() {
    const getChartUrl = 'http://localhost:3000/edges';
    return this.httpService.getRequest(getChartUrl, null, null, false, 'chart')
      .pipe(map((responseData) => responseData));
  }

  public getEntitiesData() {
    const getChartUrl = 'http://localhost:3000/entities';
    return this.httpService.getRequest(getChartUrl, null, null, false, 'chart')
      .pipe(map((responseData) => responseData));
  }

}

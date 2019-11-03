import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LabelsService {

  constructor(
      private httpService: HttpService,
  ) {}

  public getAppLabels() {
    const getAppLabelsUrl = '../assets/json/labels.json';
    return this.httpService.getRequest(getAppLabelsUrl, null, null, false, 'labels')
      .pipe(map((responseData) => this.transformData(responseData)));
  }

    /**
   * Transforms response data
   */
   public transformData(responseData): [] {
    return responseData.data;
  }


}

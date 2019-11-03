import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Services to handle http requests
 * @export
 * @class HttpService
 */
@Injectable()
export class HttpService {
  private headers: HttpHeaders;

  /**
   * Base url for rest api
   * @type {String}
   * @memberof HttpService
   */
  public defaultApiUrl: string;
  public listUrl: string;
  public listDetailsUrl: string;

  /**
   * Creates an instance of HttpService.
   * @param {HttpClient} httpClient
   * @memberof HttpService
   */

    
  constructor(public httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.defaultApiUrl = 'apiUrl';
    this.listUrl = 'listUrl';
    this.listDetailsUrl = 'listDetailsUrl';
  }

  public getRequest(
    endPoint: string,
    pathParams?: any,
    queryParams?: any,
    needBaseUrl: boolean = true,
    moduleName: string = 'default',
    options: object = {},
    customHeader: object = {}
  ): Observable<any> {
    const url = this.prepareUrl(endPoint, pathParams, queryParams, needBaseUrl, moduleName);
    const params = new HttpParams();
    this.setDefaultHeaders(customHeader);
    let opt: object = {};
    opt = Object.assign({
      headers: this.headers,
      withCredentials: true,
    }, options);
    return this.httpClient.get(url, opt);
  }

  /**
   * Put or pust
   * @param {*} [endPoint]
   * @param {*} [pathParams]
   * @param {*} [queryParams]
   * @param {*} [requestBody]
   * @param {string} [moduleName='myDocs']
   * @param {boolean} [needBaseUrl=true]
   * @param {string} [methodType='post']
   * @param {object} [options={}]
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  public postOrPutRequest(
    endPoint?: any,
    pathParams?: any,
    queryParams?: any,
    requestBody?: any,
    moduleName: string = 'myDocs',
    needBaseUrl: boolean = true,
    methodType: string = 'post',
    options: object = {},
    customHeader: object = {}
  ): Observable<any> {
    const url = this.prepareUrl(endPoint, pathParams, queryParams, needBaseUrl, moduleName);
    const params = new HttpParams();
    this.setDefaultHeaders(customHeader);
    let opt: object = {};

    opt = Object.assign({
      headers: this.headers,
      withCredentials: true,
    }, options);

    return (methodType.toLocaleLowerCase() === 'post') ?
      this.httpClient.post(url, requestBody, opt) : this.httpClient.put(url, requestBody, opt);
  }
  

  /**
   * To make delete request
   * @param endPoint
   * @param pathParams
   * @param queryParams
   * @param {string} moduleName
   * @param {boolean} needBaseUrl
   * @returns {Observable<any>}
   */
  public deleteRequest(
    endPoint?: any,
    pathParams?: any,
    queryParams?: any,
    moduleName: string = 'myDocs',
    needBaseUrl: boolean = true,
    customHeader: object = {}
  ): Observable<any> {
    const url = this.prepareUrl(endPoint, pathParams, queryParams, needBaseUrl, moduleName);
    const params = new HttpParams();
    this.setDefaultHeaders(customHeader);
    const options: any = {
      headers: this.headers
    };

    return this.httpClient.delete(url, options);
  }

  private prepareUrl(
    endPoint: string,
    pathParams?: any,
    queryParams?: any,
    needBaseUrl: boolean = true,
    moduleName: string = 'default'
  ): string {
    if (pathParams != null) {
      Object.keys(pathParams).map((key: string) => {
        endPoint = endPoint.replace('{' + key + '}', pathParams[key]);
        endPoint = endPoint.replace('[' + key + ']', pathParams[key]);
      });
    }
    endPoint = this.prepareUrlQueryString(endPoint, queryParams);
    return needBaseUrl ? this.getBaseUrl(moduleName).concat(endPoint) : endPoint;
  }

  private prepareUrlQueryString(endPoint: string, queryString: { [name: string]: string }): string {
    if (queryString != null) {
      Object.keys(queryString).map((key: string) => {
        endPoint = endPoint.replace('{' + key + '}', encodeURIComponent(queryString[key]));
      });
    }
    return endPoint;
  }

  /**
   * Used to get base url for different modules
   * @param {string} moduleName
   * @returns {string}
   */
  public getBaseUrl(moduleName: string): string {
    switch (moduleName) {
      case 'list':
        return this.listUrl;
      case 'details':
        return this.listDetailsUrl;
      default:
        return this.defaultApiUrl;
    }
  }

  private setDefaultHeaders(customHeader: object = {}, setContentType: boolean = true): void {
    this.headers = new HttpHeaders();
    if (setContentType) {
      this.headers = this.headers.append('Content-Type', 'application/json');
    }
    this.setCustomHeaders(customHeader);
  }

  private setCustomHeaders(customHeader: object): void {
    if (!customHeader) { return; }
    if (Object.keys(customHeader).length === 0) { return; }
    Object.keys(customHeader).map((key: string) => {
      if (!key || !customHeader[key]) { return; }
      this.headers = this.headers.append(key.toString(), customHeader[key].toString());
    });
  }


}

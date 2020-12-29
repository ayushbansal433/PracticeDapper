import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageRequest } from '../classes/PageRequest';
import { UserModel } from '../classes/UserModel';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl:string="";
  constructor(private httpClient: HttpClient) { 
     this.baseUrl= environment.baseUrl;
  }

  public get<T>(actionName:string, params?: any):Observable<T>{
    const apiUrl= `${this.baseUrl}/${actionName}/${params}`;
    return this.httpClient.get<T>(apiUrl);
  }

  public getQ<T>(actionName:string, params?: HttpParams):Observable<T>{
    const apiUrl= `${this.baseUrl}/${actionName}`;
    return this.httpClient.get<T>(apiUrl, {params});
  }

  public getP<T>(actionName:string, params?: HttpParams):Promise<T>{
    const apiUrl= `${this.baseUrl}/${actionName}`;
    return this.httpClient.get<T>(apiUrl, {params}).toPromise();
  }

  public getAll<T>(actionName:string):Observable<T>{
    //const params= new HttpParams(pageRequest);
    const apiUrl= `${this.baseUrl}/${actionName}`;
    return this.httpClient.get<T>(apiUrl);
  }

  public post<T>(actionName:string, requestData:any, options?:object):Observable<T>{
    const apiUrl= `${this.baseUrl}/${actionName}`;
    return this.httpClient.post<T>(apiUrl, requestData, options);
  }
}

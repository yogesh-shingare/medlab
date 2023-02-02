import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class HttpService {
  baseURL:string="http://localhost:3000/"
  httpHeaders:HttpHeaders=new HttpHeaders()
                          .set('content-type','application/json');

  constructor(private http:HttpClient) { }
  getDetailsfromServer(endpoint:string, httpparams:HttpParams=new HttpParams()){
    let URL=this.baseURL+endpoint
    return this.http.get(URL,{'headers':this.httpHeaders,'params':httpparams});
  }

  postDetailsToServer(endPoint: string,requestBody:any) {
    let url = this.baseURL + endPoint;
    return this.http.post(url, requestBody,{ 'headers': this.httpHeaders});
  }

}

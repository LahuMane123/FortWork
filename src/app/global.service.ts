import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor( private http: HttpClient) { }

  headers = new HttpHeaders()
  .set('x-client-context-info','{}')
  .set('Access-Control-Allow-Origin','*')
  .set('Content-Type', 'application/json '); 

  getFortsList() {
    return this.http.get<any>("http://localhost:7070/connectMongo", { headers: this.headers })
    .map(res => res);
}
}

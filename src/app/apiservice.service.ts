import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {apiInterface} from "./apiInterface";
import {Apiinterface} from "./apiinterface";
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

   constructor(private http: HttpClient) {}

   getList(): Observable<Apiinterface>{
      return this.http.get<Apiinterface>('http://localhost:8000/api/messages/create/');
   }
}

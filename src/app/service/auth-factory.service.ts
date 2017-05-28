import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import { Http, Response } from "@angular/http";
import { LocalStorageService } from 'ngx-webstorage';

import {HttpService} from "./http.service";

@Injectable()
export class AuthFactoryService {

  constructor(private http: Http, private localStorage: LocalStorageService) { }

  login(email: string, password: string, grantType: string, company?: number): Observable<any>{
  	return this.http.post('login/', {
  		username: email, 
  		password: password,
  		company: company,
  		grant_type: grantType
  	}).map(res => res.json());
  }
  
}

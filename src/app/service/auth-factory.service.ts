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

    setToken(token: string): void{
	    this.localStorage.store('token', token);
	}

    getToken(): string {
        return this.localStorage.retrieve('token');
    }

    setUserID(id: number): void {
        this.localStorage.store('userId', id);
        return ;
    }

    getUserID (): number {
        return this.localStorage.retrieve('userId');
    }

    setUsername (Username: string): void {
        this.localStorage.store('Username', Username);
        return ;
    }

    getUsername (): string {
        return this.localStorage.retrieve('userId');
    }

    setCompanyID (id: number): void {
        this.localStorage.store('companyId', id);
        return ;
    }

    getCompanyID (): number {
        return this.localStorage.retrieve('companyId');
    }

    setEmail (emailId: any): void {
        this.localStorage.store('email', emailId);
        return ;
    }

    getEmail (): any {
        return this.localStorage.retrieve('email');
    }

    getDomainDetails(): any {
        return this.localStorage.retrieve('domainDetails');
    }

    setDomainDetails(domain: any): void {
        this.localStorage.store('domainDetails', domain);
        return ;
    }

    setPermissions(permission: any): void {
        this.localStorage.store('permissions', permission);
        return ;
    }

    getPermissions(): any {
        return this.localStorage.retrieve('permissions');
    }

    isAuthenticated(): boolean {
        return this.getToken() ? true: false;
    }

    setCompanyName(name: string): void {
        this.localStorage.store('companyName', name);
        return ;
    }

    getCompanyName (): string {
        return this.localStorage.retrieve('companyName');
    }

    setAdmin(value: boolean): void {
        this.localStorage.store('isAdmin', value);
        return ;
    }

    isAdmin(): boolean {
        return this.localStorage.retrieve('isAdmin');
    }

    isClient(): boolean {
        return (this.getUserID() && this.getCompanyID() ? true : false);
    }

    getStatus(): any {
        return this.localStorage.retrieve('status');
    }

    setStatus(status): void {
        this.localStorage.store('status', status);
        return ;
    }

    deleteServiceWorker () {
        try{
            navigator.serviceWorker.getRegistration().then(function(r) { 
              r.unregister();
            }); 
        }
        catch(err){
            console.log("deleteServiceWorker failed", err);
        }
    }

    // deleteUser() {
    //     this.setUserID(null);
    //     this.setToken(null);
    //     this.setCompanyID(null);
    //     this.setUsername(null);
    //     this.setCompanyName(null);
    //     this.setCID(null);
    //     this.setCIP(null);
    //     this.setProfilePic(null);
    //     this.setMailTimestamp(null);
    //     this.setTotalMail(null);
    //     this.setTaskFilter(null);
    //     this.setAccountsFilter(null);
    //     this.setLeadsFilter(null);
    //     this.setPermissions(null);
    //     this.setStatus(null);
    //     this.setAdmin(null);
    //     this.setEmail(null);
    //     this.setDomainDetails([]);
    //     this.deleteServiceWorker();
    //     return true;
    // },

    setCID (id: number): void {
        this.localStorage.store('cid', id);
        return ;
    }

    getCID(): number {
        return this.localStorage.retrieve('cid');
    }

    setCIP(id: string): void {
        this.localStorage.store('chat_token', id);
        return ;
    }

    getCIP(): string {
        return this.localStorage.retrieve('chat_token');
    }

    setProfilePic(pic: any): void {
        this.localStorage.store('profilePic', pic);
        return ;
    }

    getProfilePic(): any {
        return this.localStorage.retrieve('profilePic');
    }
  
}

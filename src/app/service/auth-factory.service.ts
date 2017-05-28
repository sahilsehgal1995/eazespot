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
	    return ;
	}

    getToken(): string {
        return this.localStorage.retrieve('token');
    }

    // setUserID(id) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.userId = id;
    //     }
    //     else {
    //         $cookies.put('userId', id);
    //     }
    //     return ;
    // }

    // getUserID () {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.userId;
    //     }
    //     else {
    //         return $cookies.get('userId');
    //     }
    // }

    // setUsername (Username) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.Username = Username;
    //     }
    //     else {
    //         $cookies.put('Username', Username);
    //     }
    //     return ;
    // }

    // getUsername () {
    //     if (isLocalStorageSupported()){
    //         return ($localStorage.Username);
    //     }
    //     else {
    //         return $cookies.get('Username');
    //     }
    // }

    // setCompanyID (id) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.companyId = id;
    //     }
    //     else {
    //         $cookies.put('companyId', id);
    //     }
    //     return ;
    // }

    // getCompanyID () {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.companyId;
    //     }
    //     else {
    //         return $cookies.get('companyId');
    //     }
    // }

    // setEmail (emailId) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.email = emailId;
    //     }
    //     else {
    //         $cookies.put('email', emailId);
    //     }
    //     return ;
    // }

    // getEmail () {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.email;
    //     }
    //     else {
    //         return $cookies.get('email');
    //     }
    // }

    // getDomainDetails() {
    //    if (isLocalStorageSupported()){
    //         return $localStorage.domainDetails;
    //     }
    //     else {
    //         return $cookies.get('domainDetails');
    //     }
    // }

    // setDomainDetails(domain) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.domainDetails = domain;
    //     }
    //     else {
    //         $cookies.put('domainDetails', domain);
    //     }
    //     return ;
    // }

    // setPermissions(permission) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.permissions = permission;
    //     }
    //     else {
    //         $cookies.put('permissions', permission);
    //     }
    //     return ;
    // }

    // getPermissions() {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.permissions;
    //     }
    //     else {
    //         return $cookies.get('permissions');
    //     }
    // },

    // isAuthenticated() {
    //     if (isLocalStorageSupported()){
    //         return ($localStorage.token ? true : false);
    //     }
    //     else {
    //         return ($cookies.get('token') ? true : false);
    //     }
    // }

    // setCompanyName(name) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.companyName = name;
    //     }
    //     else {
    //         $cookies.put('companyName', name);
    //     }
    //     return ;
    // }

    // getCompanyName () {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.companyName;
    //     }
    //     else {
    //         return $cookies.get('companyName');
    //     }
    // }

    // setAdmin(value) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.isAdmin = value;
    //     }
    //     else {
    //         $cookies.put('isAdmin', value);
    //     }
    //     return ;
    // }

    // isAdmin() {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.isAdmin;
    //     }
    //     else {
    //         return $cookies.get('isAdmin');
    //     }
    // }

    // isClient() {
    //     return (this.getUserID() && this.getCompanyID() ? true : false);
    // },

    // getStatus() {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.status;
    //     }
    //     else {
    //         return $cookies.get('status');
    //     }
    // }

    // setStatus(status) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.status = status;
    //     }
    //     else {
    //         $cookies.put('status', name);
    //     }
    //     return ;
    // }

    // deleteServiceWorker () {
    //     try{
    //         navigator.serviceWorker.getRegistration().then(function(r) { 
    //           r.unregister();
    //         }); 
    //     }
    //     catch(err){
    //         console.log("deleteServiceWorker failed", err);
    //     }
    // }

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

    // setCID (id) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.cid = id;
    //     }
    //     else {
    //         $cookies.put('cid', id);
    //     }
    //     return ;
    // },

    // getCID() {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.cid;
    //     }
    //     else {
    //         return $cookies.get('cid');
    //     }
    // }

    // setCIP(id) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.chat_token = id;
    //     }
    //     else {
    //         $cookies.put('chat_token', id);
    //     }
    //     return ;
    // }

    // getCIP() {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.chat_token;
    //     }
    //     else {
    //         return $cookies.get('chat_token');
    //     }
    // }

    // setProfilePic(pic) {
    //     if (isLocalStorageSupported()){
    //         $localStorage.profilePic = pic;
    //     }
    //     else {
    //         $cookies.put('profilePic', pic);
    //     }
    //     return ;
    // }

    // getProfilePic() {
    //     if (isLocalStorageSupported()){
    //         return $localStorage.profilePic;
    //     }
    //     else {
    //         return $cookies.get('profilePic');
    //     }
    // }
  
}

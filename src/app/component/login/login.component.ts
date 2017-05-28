import { Component, OnInit } from '@angular/core';

import { AuthFactoryService } from '../../service/auth-factory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authFactory: AuthFactoryService) {

  }

  email: string = 'sahil.sehgal@tagbin.in';
  password: string = 'Sahil@1234';
  grant_type: string = 'password';
  company: number;
  companyList: number[];

  ngOnInit() {
  }

  userLogin () {
  	console.log("user login", this.email, this.password, this.company, this.grant_type);
  	this.authFactory.login(this.email, this.password, this.grant_type, this.company)
  		.subscribe((res: any) => {
  			console.log("login user", res);
  		}, (err: any) => {
  			console.log("login error", err);
        if (err.status === 428){
          this.companyList = err.json().company;
        }
  		});
  }

}

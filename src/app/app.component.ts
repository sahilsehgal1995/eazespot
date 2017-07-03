import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFactoryService } from './service/auth-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor(private authFactory: AuthFactoryService, private router: Router) {
  }

  ngOnInit() {
  	let currentUrl = this.router.url; 
  	console.log("app component url", currentUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { Services } from './services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  userInfo = [];
  constructor(private services: Services){}

  getDataHere(){
  	this.services.getData()
  				.subscribe(
  					data => {	
  								console.log(data);
  								this.userInfo = data.data;
  							}
  					);
  }

  ngOnInit(){
  	this.getDataHere();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
 /* templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: `
  			<nav class='navbar navbar-expand navbar-default'>
  				<div class="navbar-header">
  					<a class='navbar-brand'>{{pageTitle}}</a>
  				</div>
  				<ul class='nav nav-pills'>
  					<li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
  					<li><a class='nav-link'[routerLink]="['/products']">Products</a></li>
  				</ul>
  			</nav>
  			<div class='container'>
  				<router-outlet></router-outlet>
  			<div>
  			`
})
export class AppComponent {
  pageTitle = 'Acme Procduct Management';
}

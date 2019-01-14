import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
	constructor(private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	let id = +next.url[1].path;
  	if(isNaN(id) || id<1){
  		alert("invalid Product");
  		this.route.navigate(["/products"]);
  		return false;
  	}
    return true;
  }
}
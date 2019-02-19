import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from  'rxjs/Observable';

@Injectable({
	providedIn : 'root'
})

export class Services{

	constructor(private http:HttpClient){}

	getData():Observable<any>{
		return this.http.get('assets/data.json');
				
	}
}

 
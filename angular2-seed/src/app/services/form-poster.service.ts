import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Employee } from "../models/employee.model";
import 'rxjs/Rx';
import { Observable } from 'rxjs/observable';

@Injectable()

export class FormPoster{
	constructor(private http:Http){

	}

	postEmployeeForm(employee:Employee):observalble<any>{
		console.log("Posting employee :",employee);
	}
}

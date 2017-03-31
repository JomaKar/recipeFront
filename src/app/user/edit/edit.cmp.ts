import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from "rxjs/Rx";
import { ComponentCanDeactivate } from '../userGuard';


@Component({
	moduleId: module.id,
	selector: 'edit-profile',
	templateUrl: 'edit.tmp.html',
	styleUrls: []
})

export class EditUser implements ComponentCanDeactivate{
	areChanges: boolean = false;
	changesSafed : boolean = true;

	constructor(private route: Router, private aRoute: ActivatedRoute){}


	canDeactivate(): Observable<boolean> | boolean{
		return (this.changesSafed) ? true : confirm('do you want to leave without safe your changes?');
	}

	goBack(){
		let id = this.aRoute.parent.params.subscribe((param: any) => param.id);
		this.route.navigate(['profile', id]);
	}

	somethingChange(){
		this.areChanges = true;
		this.changesSafed = false;
	}

	
}
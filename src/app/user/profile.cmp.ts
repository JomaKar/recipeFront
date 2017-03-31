import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';


@Component({
	moduleId: module.id,
	selector: 'user-profile',
	templateUrl: 'profile.tmp.html',
	styleUrls: []
})

export class UserProfile implements OnInit{
	userId: number;
	txt: string;
	private subs: Subscription;

	constructor(private aRoute: ActivatedRoute){
		this.subs = aRoute.queryParams.subscribe((queries: any) => {
			console.log(queries.verified);
		});
	}

	ngOnInit(){
		this.aRoute.params.subscribe((params: Params) => {
			this.userId = +params['id'];
			this.txt = params['txt'];
		});
		// this.aRoute.queryParams
	}

	ngOnDestroy(){
		this.subs.unsubscribe();
	}
}
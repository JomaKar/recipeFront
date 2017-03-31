import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


@Component({
	moduleId: module.id,
	selector: 'recipe-delete',
	templateUrl: 'deleteRecipe.tmp.html'
})

export class RecipeDelete{
	mySubscription: Subscription;
	toDeleteId: number;

	constructor(private aRoute: ActivatedRoute){
		this.mySubscription = aRoute.params.subscribe((param: any) => this.toDeleteId = +param.id);
	}

	ngOnDestroy(){
		this.mySubscription.unsubscribe();
	}
}
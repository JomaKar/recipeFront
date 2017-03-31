import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipeClass/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
	moduleId: module.id,
	selector: 'recipe-edit',
	templateUrl: 'editRecipe.tmp.html'
})

export class RecipeEdit implements OnDestroy{
	mySubscription: Subscription;

	constructor(private recS: RecipeService, private aRoute: ActivatedRoute){
		this.mySubscription = aRoute.params.subscribe((param: any) => recS.get(+param['id']).subscribe(res => {
			if(res.json() !== false){
				let recipeOnDB = res.json();
				recipeOnDB[0].ingredients = JSON.parse(recipeOnDB[0].ingredients);
				this.recS.passingRecipeToEdit(recipeOnDB[0]);
			}
		}) );
	}

	ngOnDestroy(){
		this.mySubscription.unsubscribe();
	}


}
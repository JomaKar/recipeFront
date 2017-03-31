import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipeClass/recipe';

import { shoppingService } from '../../services/shopping.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
	moduleId: module.id,
	selector: 'recipe-detail',
	templateUrl: './RecipeDetail.tmp.html',
	styleUrls: []
})
export class RecipeDetail implements OnDestroy{
	theRecipe: Recipe;
	mySubscription: Subscription;

	constructor(private ss: shoppingService, private recS: RecipeService, private aRoute: ActivatedRoute){
		this.mySubscription = aRoute.params.subscribe((param: any) => recS.get(+param['id']).subscribe(res => {
			if(res.json() !== false){
				let recipeOnDB = res.json();
				recipeOnDB[0].ingredients = JSON.parse(recipeOnDB[0].ingredients);
				this.theRecipe = recipeOnDB[0];
			}
		}) );
	}

	ngOnDestroy(){
		this.mySubscription.unsubscribe();
	}

	toShoppingList(){
		this.ss.addIngredients(this.theRecipe.ingredients);
	}

	iLikeIt(popularOne: Recipe){
		popularOne.popularity = +popularOne.popularity;
		this.recS.update([{prop: 'popularity', equiv: 'pop', val: popularOne.popularity + 1}], popularOne.id).subscribe(res => {
			console.log(res);
			if(res.ok){
				this.theRecipe.popularity++;
			}
		});
	}

}
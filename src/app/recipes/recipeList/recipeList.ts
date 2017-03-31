import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../recipeClass/recipe';

import { RecipeService } from '../../services/recipe.service';

@Component({
	moduleId: module.id,
	selector: 'recipe-list',
	templateUrl: './recipeList.tmp.html',
	styleUrls: []
})
export class RecipeList implements OnInit{

	constructor(private rSer: RecipeService, private route: Router){}

	recipes: Recipe[] = [];

	ngOnInit(){
		this.rSer.get(null).subscribe(res => {

			if(res.json() !== false){

				let recipesOnDB = res.json();
				recipesOnDB.map((obj, i) => {
					obj.ingredients = JSON.parse(obj.ingredients);
					this.recipes.push(obj);
				});

			}

		});

		this.rSer.recipesToAdd.subscribe(recipe => {
			let lastId = +this.recipes[this.recipes.length - 1]['id'];

			// console.log(lastId, typeof lastId);
			recipe.id = lastId + 1 ;
			this.recipes.push(recipe);
		});
	}

	navigateToSelection(chosenOneId: number){
		// console.log(chosenOne);
		// console.log(chosenOne.ingredients, typeof chosenOne.ingredients);
		this.route.navigate(['/recipes', chosenOneId])
	}

}
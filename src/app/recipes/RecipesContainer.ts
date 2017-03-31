import { Component } from '@angular/core';
import { Recipe } from './recipeClass/recipe';

@Component({
	moduleId: module.id,
	selector: 'recipes-container',
	templateUrl: './RecipesContainer.tmp.html',
	styleUrls: []
})
export class RecipesContainer {
	selectedRecipe: Recipe;

	passingSelection(newRecipe: Recipe){
		//console.log(newRecipe);
		this.selectedRecipe = newRecipe;
	}

}

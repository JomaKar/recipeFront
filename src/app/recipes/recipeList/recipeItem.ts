import { Component, Input } from '@angular/core';
import { Recipe } from '../recipeClass/recipe';


@Component({
	moduleId: module.id,
	selector: 'recipe-item',
	templateUrl: './recipeItem.tmp.html',
	styleUrls: []
})
export class RecipeItem {

@Input()
recipe: Recipe;

}
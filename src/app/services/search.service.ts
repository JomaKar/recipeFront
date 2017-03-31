import { Injectable, EventEmitter} from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Recipe } from '../recipes/recipeClass/recipe';
import { IngredientProType } from '../Ingredients/IngredientClass/IngredientClassPro';

@Injectable()
export class SearchService{

	ingredientsFoundOnDB = new Subject<IngredientProType[]>();
	ingredientsSearched = new Subject<IngredientProType[]>();

	ingredientsFoundOnDB$ = this.ingredientsFoundOnDB.asObservable();
	ingredientsSearched$ = this.ingredientsSearched.asObservable();

	EnableIngredients(ingredients: IngredientProType[]){
		//console.log(ingredients, 'servicesss');
		this.ingredientsFoundOnDB.next(ingredients);
	}


	passingSearchedIngredients(ingredients: IngredientProType[]){
		// console.log(ingredients, 'servicesss');
		this.ingredientsSearched.next(ingredients);
	}

}
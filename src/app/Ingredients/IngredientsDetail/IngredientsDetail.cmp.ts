import {Component, Input} from '@angular/core';

import { Ingredient } from '../IngredientClass/ingredientsClass';

@Component({
	moduleId: module.id,
	selector: 'ingredient-detail',
	templateUrl: 'IngredientsDetail.tmp.html',
	styleUrls: []
})

export class IngredientDetail{
	@Input()
	theIng: Ingredient;
}
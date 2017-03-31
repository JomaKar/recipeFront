import {Component} from '@angular/core';
import { IngredientProType } from './IngredientClass/IngredientClassPro';

@Component({
	moduleId: module.id,
	selector: 'ingredients-container',
	templateUrl: 'IngredientsContainer.tmp.html',
	styleUrls: []
})

export class IngredientsContainer{
	noIngredients: boolean = true;
	selectedIngredient: IngredientProType;
	
	passingSelection(newIng: IngredientProType){
		this.selectedIngredient = newIng;
	}


}
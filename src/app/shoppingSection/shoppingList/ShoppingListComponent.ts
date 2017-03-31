import { Component, OnInit } from '@angular/core';
import { IngredientOnRecipe } from '../../Ingredients/IngredientClass/IngredientOnRecipe';

import { shoppingService } from '../../services/shopping.service';

@Component({
	moduleId: module.id,
	selector: 'shopping-list',
	templateUrl: 'ShoppingList.tmp.html',
	styleUrls: []
})

export class ShoppingListComponent implements OnInit{
	ingredientsAvailable: Array<IngredientOnRecipe> = [];

	constructor(private ss: shoppingService){}

	ngOnInit(){
		this.ingredientsAvailable = this.ss.getIngredients();
		console.log(this.ingredientsAvailable);
	}
}
import { IngredientOnRecipe } from '../Ingredients/IngredientClass/IngredientOnRecipe';

export class shoppingService{
	theIngredients: IngredientOnRecipe[] = [];

	getIngredients(): Array<IngredientOnRecipe>{
		return this.theIngredients;
	}

	addIngredients(newIngredients: IngredientOnRecipe[]){
		console.log(newIngredients, 'ss');
		Array.prototype.push.apply(this.theIngredients, newIngredients);
	}
}
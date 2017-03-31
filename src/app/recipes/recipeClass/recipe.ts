import { IngredientOnRecipe } from '../../Ingredients/IngredientClass/IngredientOnRecipe';

export class Recipe{
	id: number | string;
	name: string;
	imgPath: string;
	description: string;
	ingredients: Array<IngredientOnRecipe>;
	popularity: number;
}
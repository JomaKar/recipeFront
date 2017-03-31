import { Routes } from '@angular/router';

import { RecipeDetail } from './recipes/RecipeDetail/RecipeDetail';
import { AddRecipeForm } from './recipes/addRecipe/addRecipe.cmp';
import { RecipeEdit } from './recipes/editRecipe/editRecipe.cmp';
import { RecipeDelete } from './recipes/deleteRecipe/deleteRecipe.cmp';


export const recipesRoutes: Routes = [
	{ path: 'new', component:  AddRecipeForm},
	{ path: ':id', component: RecipeDetail},
	{ path: ':id/edit', component: RecipeEdit},
	{ path: ':id/delete', component: RecipeDelete}
];


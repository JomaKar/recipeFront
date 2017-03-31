import {Component, Output, EventEmitter, OnInit, OnChanges, Input, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipeClass/recipe';
import { RecipeService } from '../../services/recipe.service';
import { SearchService } from '../../services/search.service';

import { IngredientProType } from '../../Ingredients/IngredientClass/IngredientClassPro';
import { IngredientOnRecipe } from '../../Ingredients/IngredientClass/IngredientOnRecipe';

@Component({
	moduleId: module.id,
	selector: 'add-recipes-form',
	templateUrl: 'addRecipe.tmp.html',
	styleUrls: []
})

export class AddRecipeForm implements OnDestroy{
	mySubscription : Subscription;
	newRecipeAdd = new Recipe();
	originalRecipeToEdit: Recipe;
	ingredientsOnRecipe: IngredientOnRecipe [] = [];
	ingredientsChange: boolean = false;
	@Input() RecipeToEdit: Recipe;
	@Input() toAdd: boolean = true;

	constructor(private recS: RecipeService, private aRoute: ActivatedRoute, private route:Router){
		this.mySubscription = recS.recipeToEdit.subscribe(recipe => {
				this.newRecipeAdd = recipe;
				this.ingredientsOnRecipe = this.newRecipeAdd.ingredients;
			});

		aRoute.params.subscribe((param: any) => recS.get(+param['id']).subscribe(res => {
			if(res.json() !== false){
				let recipeOnDB = res.json();
				recipeOnDB[0].ingredients = JSON.parse(recipeOnDB[0].ingredients);
				this.originalRecipeToEdit = recipeOnDB[0];
			}
		}) );

		if(this.toAdd){ 
			this.newRecipeAdd.imgPath = "./assets/images/recipes/"; 
		}
	}



	removeIngredients(passedId: number){
		this.ingredientsOnRecipe = this.ingredientsOnRecipe.filter(ingredient => ingredient.ingredient.id !== passedId);
	}


	onSubmit(e){
		e.preventDefault();
		this.newRecipeAdd.ingredients = this.ingredientsOnRecipe;
		if(this.toAdd){
			this.recS.add(this.newRecipeAdd).subscribe(res => {

				if(res.ok){
					this.recS.passingNewRecipe(this.newRecipeAdd);
					this.newRecipeAdd = new Recipe();
					this.ingredientsOnRecipe = [];
					this.newRecipeAdd.imgPath = './assets/images/recipes/';
					alert('receta añadida correctamente');
					// window.location.reload();
				}
			});
		// when there's an edition
		}else{
			let objectsToSendOnEdition: Object[] = [];
			console.log('working on it');
			for (var key in this.originalRecipeToEdit) {
				if(key == 'ingredients'){
					this.originalRecipeToEdit.ingredients.forEach((obj, i) => {
						if(this.newRecipeAdd.ingredients.length > this.originalRecipeToEdit.ingredients.length){
							this.ingredientsChange = true;
							console.log('one has been added');
						}else if(this.newRecipeAdd.ingredients.length < this.originalRecipeToEdit.ingredients.length){
							this.ingredientsChange = true;
							console.log('one was deleted');
						}else if(this.newRecipeAdd.ingredients.length == this.originalRecipeToEdit.ingredients.length){
							if(this.newRecipeAdd.ingredients[i]){
								(obj.amount !== this.newRecipeAdd.ingredients[i]['amount'] || obj.ingredient.name !== this.newRecipeAdd.ingredients[i]['ingredient']['name']) ? this.ingredientsChange = true : null;
								console.log('comparing');
							}
						}
					});
				}else if(this.originalRecipeToEdit[key] !== this.newRecipeAdd[key] && this.newRecipeAdd[key] !== undefined){
					this.newRecipeAdd[key] = this.newRecipeAdd[key].replace(/-/g, ' ');
					objectsToSendOnEdition.push({prop: key, equiv: key.slice(0, 3), val: this.newRecipeAdd[key]});
					// console.log(key, typeof key, this.newRecipeAdd[key], 'different', this.newRecipeAdd[key]);
				}
				
			}
			(this.ingredientsChange) ? objectsToSendOnEdition.push({prop: 'ingredients', equiv: 'ing', val: JSON.stringify(this.newRecipeAdd.ingredients)}) : null;

			// console.log(objectsToSendOnEdition);
			if(objectsToSendOnEdition.length > 0){
				this.recS.update(objectsToSendOnEdition, this.originalRecipeToEdit.id).subscribe(res => {
					if(res.ok){
						alert('Recipe correctly edited');
						this.route.navigate(['/recipes', this.originalRecipeToEdit.id]);
					}
				});
			}else{ 
				alert('ningún cambio se detectó');
			}
		}
	}


	passingSelection(selectedIngredient: IngredientProType){

		let onListIdx = -1;

		if(this.ingredientsOnRecipe.length > 0){
			this.ingredientsOnRecipe.forEach( (ing, idx) => (ing.ingredient.id == selectedIngredient.id) ? onListIdx = idx : null );
			// console.log(onListIdx, 'idx');
			(onListIdx == -1) ? this.ingredientsOnRecipe.push({ingredient: selectedIngredient, amount: 1}) : null;

		}else{
			this.ingredientsOnRecipe.push({ingredient: selectedIngredient, amount: 1});
		}

	}

	ngOnDestroy(){
		this.mySubscription.unsubscribe();
	}

}
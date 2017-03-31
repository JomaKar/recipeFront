import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipeClass/recipe';

import { RecipeService } from '../services/recipe.service';

@Component({
	moduleId: module.id,	
	selector: 'landing-component',
	templateUrl: './Landing.tmp.html'
})

export class LandingComponent implements OnInit{
	constructor(private rSer: RecipeService){}

	popularRecipes: Recipe[] = [];


	ngOnInit(){
		this.rSer.get(null).subscribe(res => {

			if(res.json() !== false){

				let recipesOnDB = res.json();
				this.extractNumbers(recipesOnDB);
				recipesOnDB.sort((a, b) => a.popularity - b.popularity);
				console.log(recipesOnDB, 'after sort');
			}

		}) ;

	}

	private extractNumbers(recipes: Recipe[]){
		let numbers = [];
		recipes.forEach((rec, ind) => numbers.push(rec.popularity));
		console.log(numbers, recipes);
	}

	private fiveTopNumbers(num: number[], recipes: Recipe[]){
		//loop where
			//encontrar número más alto
			//encontrar recipe con ese número y añadirlo a array de populares
			//eliminarlo de array de números
			//pasar al que sigue
		// para cuando sean 5
		for (var i = 0; i < 5; ++i) {
			let topNumber = Math.max.apply(null, num);
			this.popularRecipes.push(recipes.find(rcp => rcp.popularity == topNumber));
			let idx = num.indexOf(topNumber);
			num.splice(idx, 1);

		}

		console.log(this.popularRecipes, 'after functions');
	}
	
}
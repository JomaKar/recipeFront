import { Component, Input, Output, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { IngredientProType } from '../Ingredients/IngredientClass/IngredientClassPro';
import { Recipe } from '../recipes/recipeClass/recipe';

@Component({
	moduleId: module.id,
	selector: 'search-box',
	templateUrl: 'searchBox.tmp.html',
	styleUrls: []
})

export class SearchBox implements OnInit{
	searchBetweenIng: IngredientProType[] = [];
	searchBetweenRec: Recipe[] = [];

	matchedIngredients: IngredientProType[];
	matchedRecipes: Recipe[];

	constructor(private searchS: SearchService){
		searchS.ingredientsFoundOnDB$.subscribe(ingredients => this.searchBetweenIng = ingredients);
	}

	private searchIngredientsWord = new Subject<string>();
	private searchRecipesWord = new Subject<string>();

	filteringIngredients(word: string){
		this.searchIngredientsWord.next(word);
	}

	filteringRecipes(word: string){
		this.searchRecipesWord.next(word);
	}

	ngOnInit(): void{
		
		this.searchIngredientsWord.debounceTime(300)
									.distinctUntilChanged()
									.subscribe(text => text ? this.findBetweenIngredients(text) : this.searchS.passingSearchedIngredients(null) );

	}

	private findBetweenIngredients(name: string){

		if(name.length > 1){
			
			let arrayOfString = name.split('');
			let firstLetter = arrayOfString[0].toUpperCase();
			arrayOfString[0] = firstLetter;
			name = arrayOfString.join('');

		}else{
			name = name.toUpperCase();
		}

		console.log(name, 'from process');

		let matched = [];

		this.searchBetweenIng.forEach((posIng, ingIdx) => {
			(posIng.name.search(name) !== -1) ? matched.push(posIng) : null;
		});

		this.matchedIngredients = (matched.length > 0) ? matched : null;
		this.searchS.passingSearchedIngredients(this.matchedIngredients);
	}


}
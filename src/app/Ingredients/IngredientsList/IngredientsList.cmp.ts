import {Component, Output, EventEmitter, OnInit, OnChanges, ElementRef, Renderer} from '@angular/core';

import { IngredientsService } from '../../services/ingredients.service';
import { SearchService } from '../../services/search.service';

import { IngredientProType } from '../IngredientClass/IngredientClassPro';

@Component({
	moduleId: module.id,
	selector: 'ingredients-list',
	templateUrl: 'IngredientsList.tmp.html',
	styleUrls: []
})

export class IngredientsList implements OnInit{
	ingredients: IngredientProType[] = [];
	foundedIngredients: IngredientProType[];
	activeSearch: boolean = false;
	noFoundedIngredients: boolean = false;

	@Output() areNoIngredients = new EventEmitter();
	@Output() selectingIngredient = new EventEmitter();


	constructor(private ingS: IngredientsService, private searchS: SearchService, private elR: ElementRef, private ren: Renderer){}

	ngOnInit(){

		//to get original ingredients
		this.ingS.get(null).subscribe(res => {

			if(res.json() !== false){

				let newIngredients = res.json();
				//Array.prototype.push.apply(this.ingredients, newIngredients);
				newIngredients.map((obj, i) => {
					this.ingredients.push(obj);
				});

				this.searchS.EnableIngredients(this.ingredients);
				this.areNoIngredients.emit(false);
			}

		});

		//to automatically add to the ingredients list recently set ingredients
		this.ingS.storingData.subscribe(newIng => {
			this.areNoIngredients.emit(false);
			this.ingredients.push(newIng);
		});


		//to catch searched items and display them
		this.searchS.ingredientsSearched$.subscribe(items => items ? 
				( 
				this.foundedIngredients = items, this.activeSearch = true, this.areNoIngredients.emit(false), this.noFoundedIngredients = false
				) 
				: 
				(this.activeSearch = false, this.noFoundedIngredients = true, console.log('false'))
			);

	}

	clickSelection(ing: IngredientProType){
		this.selectingIngredient.emit(ing);
	}


}
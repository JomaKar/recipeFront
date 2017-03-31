import {Component, OnInit} from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';

import { IngredientProType } from '../IngredientClass/IngredientClassPro';

@Component({
	moduleId: module.id,
	selector: 'add-ingredients',
	templateUrl: 'AddIngredients.tmp.html',
	styleUrls: []
})

export class AddIngredientsForm implements OnInit{

	newIngredient = new IngredientProType();

	constructor(private ingS: IngredientsService){}

	ngOnInit(){
		this.newIngredient.imgPath = "./assets/images/ingredients/";
	}

	onSubmit(){
		this.ingS.add(this.newIngredient).subscribe(res => {
			if(res.ok){
				this.ingS.passingData(this.newIngredient);
				this.newIngredient = new IngredientProType();
				this.newIngredient.imgPath = './assets/images/ingredients/';
				alert('ingrediente añadido correctamente');
			}
		});
	}


}
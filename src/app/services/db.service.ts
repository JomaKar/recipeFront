import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import {IngredientProType} from '../Ingredients/IngredientClass/IngredientClassPro';
import {Recipe} from '../recipes/recipeClass/recipe';

@Injectable()
export class DBservice {

	private addUrl = 'http://localhost/RecipeDB/create.php';
	private getUrl = 'http://localhost/RecipeDB/read.php';
	private updateUrl = 'http://localhost/RecipeDB/update.php';
	private deleteUrl = 'http://localhost/RecipeDB/delete.php';

	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'});

	constructor(private http: Http){}


	add(){

	}

	get(){
		return 
	}

	delete(){

	}

	update(){

	}

}
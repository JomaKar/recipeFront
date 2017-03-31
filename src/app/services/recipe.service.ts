import {Injectable, EventEmitter} from '@angular/core';
//import { DBservice } from './db.service';
import { Headers, Http } from '@angular/http';


import { Recipe } from '../recipes/recipeClass/recipe';

@Injectable()
export class RecipeService {
	recipesToAdd = new EventEmitter<Recipe>();
	recipeToEdit = new EventEmitter<Recipe>();
	private addUrl = 'http://localhost/RecipeDB/create.php';
	private getUrl = 'http://localhost/RecipeDB/read.php';
	private updateUrl = 'http://localhost/RecipeDB/update.php';
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'});

	constructor(private http: Http){}			


	get(id: number){
		
		let stringToSend = (id) ? `db=recipes&id=${id}` : `db=recipes`;
		return this.http.post(this.getUrl, stringToSend, {headers: this.headers});
	}

	add(newRecipe: Recipe){
		let recipeIngredients = JSON.stringify(newRecipe.ingredients);
		// console.log(recipeIngredients);
		let stringToSend = `db=recipes&name=${newRecipe.name}&description=${newRecipe.description}&popularity=0&imgPath=${newRecipe.imgPath}&ingredients=${recipeIngredients}`;
		return this.http.post(this.addUrl, stringToSend, {headers: this.headers});
	}

	passingNewRecipe(newRecipe: Recipe){
		this.recipesToAdd.emit(newRecipe);
	}

	delete(){

	}

	update(arrayOfNewProps, id){
		let updateColumns: string = '';
		let equivalentValues: string = '';
		let values: any = '';

		arrayOfNewProps.map((obj, i) => {
			updateColumns += (i < arrayOfNewProps.length - 1) ? `${obj.prop}-` : obj.prop;
			equivalentValues += (i < arrayOfNewProps.length - 1) ? `${obj.equiv}-` : obj.equiv;
			values += (i < arrayOfNewProps.length - 1) ? `${obj.val}-` : obj.val;
		});

		let stringToSend = `db=recipes&id=${id}&uc=${updateColumns}&ev=${equivalentValues}&v=${values}`;
		// console.log(stringToSend);

		return this.http.post(this.updateUrl, stringToSend, {headers: this.headers});
	}

	passingRecipeToEdit(passedToEdit: Recipe){
		this.recipeToEdit.emit(passedToEdit);
	}

}
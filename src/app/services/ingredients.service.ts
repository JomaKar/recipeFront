import {Injectable, EventEmitter} from '@angular/core';
//import { DBservice } from './db.service';
import { Headers, Http } from '@angular/http';
import { IngredientProType } from '../Ingredients/IngredientClass/IngredientClassPro';

@Injectable()
export class IngredientsService {
	private addUrl = 'http://localhost/RecipeDB/create.php';
	private getUrl = 'http://localhost/RecipeDB/read.php';
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'});

	storingData = new EventEmitter();

	constructor(private http: Http){}

	passingData(ing: IngredientProType){
		this.storingData.emit(ing);
	}

	get(id: number){
		
		let stringToSend = (id) ? `db=ingredients&id=${id}` : `db=ingredients`;
		return this.http.post(this.getUrl, stringToSend, {headers: this.headers});
	}

	add(newIngredient: IngredientProType){
		let stringToSend = `db=ingredients&name=${newIngredient.name}&price=${newIngredient.price}&amount_price=${newIngredient.amount_price}&imgPath=${newIngredient.imgPath}`;
		return this.http.post(this.addUrl, stringToSend, {headers: this.headers});
	}

	delete(){

	}

	update(){

	}

}
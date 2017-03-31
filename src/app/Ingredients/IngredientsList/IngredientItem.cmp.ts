import { Component, Input } from '@angular/core';
import { IngredientProType } from '../IngredientClass/IngredientClassPro';


@Component({
	moduleId: module.id,
	selector: 'ingredient-list-item',
	templateUrl: './IngredientItem.tmp.html',
	styleUrls: []
})
export class IngredientItem {

@Input() ingredient: IngredientProType;


}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { IngredientProType } from '../IngredientClass/IngredientClassPro';
var AddIngredientsForm = (function () {
    function AddIngredientsForm(ingS) {
        this.ingS = ingS;
        this.newIngredient = new IngredientProType();
    }
    AddIngredientsForm.prototype.ngOnInit = function () {
        this.newIngredient.imgPath = "./assets/images/ingredients/";
    };
    AddIngredientsForm.prototype.onSubmit = function () {
        var _this = this;
        this.ingS.add(this.newIngredient).subscribe(function (res) {
            if (res.ok) {
                _this.ingS.passingData(_this.newIngredient);
                _this.newIngredient = new IngredientProType();
                _this.newIngredient.imgPath = './assets/images/ingredients/';
            }
        });
    };
    return AddIngredientsForm;
}());
AddIngredientsForm = __decorate([
    Component({
        moduleId: module.id,
        selector: 'add-ingredients',
        templateUrl: 'AddIngredients.tmp.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [IngredientsService])
], AddIngredientsForm);
export { AddIngredientsForm };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/Ingredients/AddIngredients/AddIngredients.cmp.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
var IngredientsList = (function () {
    function IngredientsList(ingS) {
        this.ingS = ingS;
        this.ingredients = [];
        this.noIngredients = true;
        this.selectingIngredient = new EventEmitter();
    }
    IngredientsList.prototype.ngOnInit = function () {
        var _this = this;
        this.ingS.get(null).subscribe(function (res) {
            if (res.json() !== false) {
                _this.noIngredients = false;
                var newIngredients = res.json();
                //Array.prototype.push.apply(this.ingredients, newIngredients);
                newIngredients.map(function (obj, i) {
                    _this.ingredients.push(obj);
                });
            }
        });
        this.ingS.storingData.subscribe(function (newIng) {
            _this.noIngredients = false;
            _this.ingredients.push(newIng);
        });
    };
    IngredientsList.prototype.clickSelection = function (ing) {
        this.selectingIngredient.emit(ing);
    };
    return IngredientsList;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], IngredientsList.prototype, "selectingIngredient", void 0);
IngredientsList = __decorate([
    Component({
        moduleId: module.id,
        selector: 'ingredients-list',
        templateUrl: 'IngredientsList.tmp.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [IngredientsService])
], IngredientsList);
export { IngredientsList };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/Ingredients/IngredientsList/IngredientsList.cmp.js.map
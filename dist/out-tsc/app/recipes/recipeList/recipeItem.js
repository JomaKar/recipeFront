var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipeClass/recipe';
var RecipeItem = (function () {
    function RecipeItem() {
    }
    return RecipeItem;
}());
__decorate([
    Input(),
    __metadata("design:type", Recipe)
], RecipeItem.prototype, "recipe", void 0);
RecipeItem = __decorate([
    Component({
        moduleId: module.id,
        selector: 'recipe-item',
        templateUrl: './recipeItem.tmp.html',
        styleUrls: []
    })
], RecipeItem);
export { RecipeItem };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/recipes/recipeList/recipeItem.js.map
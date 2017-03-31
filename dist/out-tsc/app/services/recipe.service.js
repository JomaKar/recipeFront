var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { RECIPES } from '../recipes/recipeClass/recipeArray';
var RecipeService = (function () {
    function RecipeService() {
        this.recipes = RECIPES;
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    return RecipeService;
}());
RecipeService = __decorate([
    Injectable()
], RecipeService);
export { RecipeService };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/services/recipe.service.js.map
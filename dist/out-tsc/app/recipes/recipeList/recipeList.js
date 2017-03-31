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
import { RecipeService } from '../../services/recipe.service';
var RecipeList = (function () {
    function RecipeList(rSer) {
        this.rSer = rSer;
        this.selectingRecipe = new EventEmitter();
    }
    RecipeList.prototype.ngOnInit = function () {
        this.recipes = this.rSer.getRecipes();
    };
    RecipeList.prototype.recipeSelection = function (chosenOne) {
        //console.log(chosenOne);
        this.selectingRecipe.emit(chosenOne);
    };
    return RecipeList;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], RecipeList.prototype, "selectingRecipe", void 0);
RecipeList = __decorate([
    Component({
        moduleId: module.id,
        selector: 'recipe-list',
        templateUrl: './recipeList.tmp.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [RecipeService])
], RecipeList);
export { RecipeList };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/recipes/recipeList/recipeList.js.map
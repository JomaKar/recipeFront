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
import { RecipeService } from '../services/recipe.service';
var LandingComponent = (function () {
    function LandingComponent(rSer) {
        this.rSer = rSer;
        this.popularRecipes = [];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var recipes = this.rSer.getRecipes();
        this.extractNumbers(recipes);
    };
    LandingComponent.prototype.extractNumbers = function (recipes) {
        var numbers = [];
        recipes.forEach(function (rec, ind) { return numbers.push(rec.popularity); });
        console.log(numbers, recipes);
    };
    LandingComponent.prototype.fiveTopNumbers = function (num, recipes) {
        var _loop_1 = function () {
            var topNumber = Math.max.apply(null, num);
            this_1.popularRecipes.push(recipes.find(function (rcp) { return rcp.popularity == topNumber; }));
            var idx = num.indexOf(topNumber);
            num.splice(idx, 1);
        };
        var this_1 = this;
        //loop where
        //encontrar número más alto
        //encontrar recipe con ese número y añadirlo a array de populares
        //eliminarlo de array de números
        //pasar al que sigue
        // para cuando sean 5
        for (var i = 0; i < 5; ++i) {
            _loop_1();
        }
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'landing-component',
        templateUrl: './Landing.tmp.html'
    }),
    __metadata("design:paramtypes", [RecipeService])
], LandingComponent);
export { LandingComponent };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/LandingComponent/Landing.component.js.map
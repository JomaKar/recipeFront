var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
//import { DBservice } from './db.service';
import { Headers, Http } from '@angular/http';
var IngredientsService = (function () {
    function IngredientsService(http) {
        this.http = http;
        this.addUrl = 'http://localhost/RecipeDB/create.php';
        this.getUrl = 'http://localhost/RecipeDB/read.php';
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*' });
        this.storingData = new EventEmitter();
    }
    IngredientsService.prototype.passingData = function (ing) {
        this.storingData.emit(ing);
    };
    IngredientsService.prototype.get = function (id) {
        var stringToSend = (id) ? "db=ingredients&id=" + id : "db=ingredients";
        return this.http.post(this.getUrl, stringToSend, { headers: this.headers });
    };
    IngredientsService.prototype.add = function (newIngredient) {
        var stringToSend = "db=ingredients&name=" + newIngredient.name + "&price=" + newIngredient.price + "&amount_price=" + newIngredient.amount_price + "&imgPath=" + newIngredient.imgPath;
        return this.http.post(this.addUrl, stringToSend, { headers: this.headers });
    };
    IngredientsService.prototype.delete = function () {
    };
    IngredientsService.prototype.update = function () {
    };
    return IngredientsService;
}());
IngredientsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], IngredientsService);
export { IngredientsService };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/services/ingredients.service.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
var DBservice = (function () {
    function DBservice(http) {
        this.http = http;
        this.addUrl = 'http://localhost/RecipeDB/create.php';
        this.getUrl = 'http://localhost/RecipeDB/read.php';
        this.updateUrl = 'http://localhost/RecipeDB/update.php';
        this.deleteUrl = 'http://localhost/RecipeDB/delete.php';
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*' });
    }
    DBservice.prototype.add = function () {
    };
    DBservice.prototype.get = function () {
        return;
    };
    DBservice.prototype.delete = function () {
    };
    DBservice.prototype.update = function () {
    };
    return DBservice;
}());
DBservice = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], DBservice);
export { DBservice };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/services/db.service.js.map
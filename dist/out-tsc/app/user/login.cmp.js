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
import { Router } from '@angular/router';
var LoginUser = (function () {
    function LoginUser(route) {
        this.route = route;
        this.checkedUser = false;
    }
    LoginUser.prototype.goToUser = function (userId) {
        this.route.navigate(['profile', userId], { queryParams: { 'verified': this.checkedUser } });
    };
    LoginUser.prototype.goFake = function (txt) {
        var userId = 3;
        this.route.navigate(['profile', userId, 'edit', txt], { queryParams: { 'verified': this.checkedUser } });
    };
    return LoginUser;
}());
LoginUser = __decorate([
    Component({
        moduleId: module.id,
        selector: 'user-login',
        templateUrl: 'login.tmp.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [Router])
], LoginUser);
export { LoginUser };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/user/login.cmp.js.map
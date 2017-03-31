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
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
var UserProfile = (function () {
    function UserProfile(aRoute) {
        this.aRoute = aRoute;
        this.subs = aRoute.queryParams.subscribe(function (queries) {
            console.log(queries.verified);
        });
    }
    UserProfile.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (params) {
            _this.userId = +params['id'];
            _this.txt = params['txt'];
        });
        // this.aRoute.queryParams
    };
    UserProfile.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    return UserProfile;
}());
UserProfile = __decorate([
    Component({
        moduleId: module.id,
        selector: 'user-profile',
        templateUrl: 'profile.tmp.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [ActivatedRoute])
], UserProfile);
export { UserProfile };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/user/profile.cmp.js.map
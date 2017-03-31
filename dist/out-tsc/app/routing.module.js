var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipesContainer } from './recipes/RecipesContainer';
import { ShoppingListComponent } from './shoppingSection/shoppingList/ShoppingListComponent';
import { LandingComponent } from './LandingComponent/Landing.component';
import { IngredientsContainer } from './Ingredients/IngredientsContainer.cmp';
import { LoginUser } from './user/login.cmp';
import { UserProfile } from './user/profile.cmp';
var routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'recipes', component: RecipesContainer },
    { path: 'shopping', component: ShoppingListComponent },
    { path: 'ingredients', component: IngredientsContainer },
    { path: 'login', component: LoginUser },
    { path: 'profile/:id', component: UserProfile },
    { path: 'profile/:id/edit/:txt', component: UserProfile }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRouterModule);
export { AppRouterModule };
//SET routes without tokens
//in html////
//<a [routerLink]="/dir" >go</a>
//in js////
//method(){  this.route.navigate('/dir')  }
//SET routes with tokens
//in html////
//<a [routerLink]="['/dir', theId]" >go</a>
//in js////
//method(){  this.route.navigate(['/dir', theId])  }
//GET routes with tokens
// method(){  this.ActivatedRoute.snapshot.params.tokenName  }
//OR
// method(){  this.ActivatedRoute.params.subscribe((param: any) => this.myProperty = param.tokenName || param['tokenName'])  }
//SET query strings
//in html////
//<a [routerLink]="/dir"  [queryParams]="{key:value-queries}" >go</a>
//in js////
//method(){  this.route.navigate('/dir', {queryParams: {key:value-queries}})  }
//GET query strings
//in js////
//method(){  this.ActivatedRoute.queryParams.subscribe((param: any) => this.myProperty = param.tokenName || param['tokenName'])  }
//OR
// method(){  this.ActivatedRoute.queryParams.tokenName  }
//SET URL SECTIONS
//in html////
//<a [routerLink]="/dir"  [queryParams]="{key:value-queries}" [fragment]="'wishedSection'" >go</a>
//in js////
//method(){  this.route.navigate('/dir', {queryParams: {key:value-queries}, fragment: 'wishedSection'})  }
///////////////////////////////////
///////IF YOU WANT TO SAFE/////////
///////QUERIES OR SECTIONS/////////
///////WHILE NAVIGATING WITH///////
///////LINKS, DO LIKE THIS/////////
///////IN HTML///////
//<a [routerLink]="/dir"  [queryParams]="{key:value-queries}" [fragment]="'wishedSection'" [preserveQueryParams]="true"  >go</a>
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/routing.module.js.map
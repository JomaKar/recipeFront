import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { LandingComponent } from './LandingComponent/Landing.component';

import { RecipesContainer } from './recipes/RecipesContainer';
import { recipesRoutes } from './recipesChild.routes';

import { IngredientsContainer } from './Ingredients/IngredientsContainer.cmp';

import {ShoppingListComponent} from './shoppingSection/shoppingList/ShoppingListComponent';

import { LoginUser } from './user/login/login.cmp';
import { UserProfile } from './user/profile.cmp';
import { userRoutes } from './userChild.routes';
import { UserGuard } from './user/userGuard';

const routes: Routes = [
	{ path: '', component: LandingComponent, pathMatch: 'full' },
	{ path: 'recipes', component:  RecipesContainer},
	{ path: 'recipes', component:  RecipesContainer, children: recipesRoutes},
	{ path: 'shopping', component: ShoppingListComponent},
	{ path: 'ingredients', component: IngredientsContainer},
	{ path: 'login', component: LoginUser},
	{ path: 'profile/:id', component: UserProfile, canActivate: [UserGuard]},
	{ path: 'profile/:id', component: UserProfile, children: userRoutes}
];



@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRouterModule{}


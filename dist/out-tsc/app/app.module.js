var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './routing.module';
import { RecipeService } from './services/recipe.service';
import { shoppingService } from './services/shopping.service';
import { IngredientsService } from './services/ingredients.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headerComponent';
import { DropdownDirective } from './header/dropdownDirective';
import { LandingComponent } from './LandingComponent/Landing.component';
import { RecipesContainer } from './recipes/RecipesContainer';
import { RecipeList } from './recipes/recipeList/recipeList';
import { RecipeItem } from './recipes/recipeList/recipeItem';
import { RecipeDetail } from './recipes/RecipeDetail/RecipeDetail';
import { AddToShopping } from './shoppingSection/addToShopping/AddToShopping';
import { ShoppingListComponent } from './shoppingSection/shoppingList/ShoppingListComponent';
import { IngredientsContainer } from './Ingredients/IngredientsContainer.cmp';
import { IngredientsList } from './Ingredients/IngredientsList/IngredientsList.cmp';
import { IngredientItem } from './Ingredients/IngredientsList/IngredientItem.cmp';
import { IngredientDetail } from './Ingredients/IngredientsDetail/IngredientsDetail.cmp';
import { AddIngredientsForm } from './Ingredients/AddIngredients/AddIngredients.cmp';
import { LoginUser } from './user/login.cmp';
import { UserProfile } from './user/profile.cmp';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            DropdownDirective,
            LandingComponent,
            RecipesContainer,
            RecipeList,
            RecipeItem,
            RecipeDetail,
            AddToShopping,
            ShoppingListComponent,
            IngredientsContainer,
            IngredientsList,
            IngredientDetail,
            IngredientItem,
            AddIngredientsForm,
            LoginUser,
            UserProfile
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            AppRouterModule
        ],
        providers: [RecipeService, shoppingService, IngredientsService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=/Users/Captura02/Desktop/angular/recipe-book/src/app/app.module.js.map
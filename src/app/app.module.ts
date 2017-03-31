import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppRouterModule } from './routing.module';


import { RecipeService } from './services/recipe.service';
import { shoppingService } from './services/shopping.service';
import { IngredientsService } from './services/ingredients.service';
import { SearchService } from './services/search.service';

import { ListOnFormAttrDirective } from  './Directives/AttrListOnForm';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/headerComponent';
import { DropdownDirective } from './header/dropdownDirective';

import { LandingComponent } from './LandingComponent/Landing.component';

import { SearchBox } from './search-box/searchBox.cmp';

import { RecipesContainer } from './recipes/RecipesContainer';
import { RecipeList } from './recipes/recipeList/recipeList';
import { RecipeItem } from './recipes/recipeList/recipeItem';
import { RecipeDetail } from './recipes/RecipeDetail/RecipeDetail';
import { RecipeEdit } from './recipes/editRecipe/editRecipe.cmp';
import { AddRecipeForm } from './recipes/addRecipe/addRecipe.cmp';
import { RecipeDelete } from './recipes/deleteRecipe/deleteRecipe.cmp';

import { AddToShopping } from './shoppingSection/addToShopping/AddToShopping';
import { ShoppingListComponent } from './shoppingSection/shoppingList/ShoppingListComponent';

import { IngredientsContainer } from './Ingredients/IngredientsContainer.cmp';
import { IngredientsList } from './Ingredients/IngredientsList/IngredientsList.cmp';
import { IngredientItem } from './Ingredients/IngredientsList/IngredientItem.cmp';
import { IngredientDetail } from './Ingredients/IngredientsDetail/IngredientsDetail.cmp';
import { AddIngredientsForm } from './Ingredients/AddIngredients/AddIngredients.cmp';


import { LoginUser } from './user/login/login.cmp';
import { UserProfile } from './user/profile.cmp';
import { UserFavoriteRecipes } from './user/favorite/favorites.cmp';
import { EditUser } from './user/edit/edit.cmp';

import { UserGuard, UserEditGuardOut } from './user/userGuard';


@NgModule({
  declarations: [
    ListOnFormAttrDirective,
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    LandingComponent,
    SearchBox,
    RecipesContainer,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    RecipeEdit,
    AddRecipeForm,
    RecipeDelete,
    AddToShopping,
    ShoppingListComponent,
    IngredientsContainer,
    IngredientsList,
    IngredientDetail,
    IngredientItem,
    AddIngredientsForm,
    LoginUser,
    UserProfile,
    UserFavoriteRecipes,
    EditUser
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [
    RecipeService, 
    shoppingService, 
    IngredientsService, 
    SearchService,
    UserGuard, 
    UserEditGuardOut 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

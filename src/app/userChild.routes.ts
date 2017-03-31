import { Routes } from '@angular/router';
import { EditUser } from './user/edit/edit.cmp';
import { UserFavoriteRecipes } from './user/favorite/favorites.cmp';

import { UserEditGuardOut } from './user/userGuard';

export const userRoutes: Routes = [
	{ path: 'edit', component: EditUser, canDeactivate: [UserEditGuardOut]},
	{ path: 'favorites', component: UserFavoriteRecipes}
];


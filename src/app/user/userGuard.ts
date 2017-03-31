import { CanActivate, CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
//RouterStateSnapshot whats your state
//ActivatedRouteSnapshot is the route where you want to go,
//this two helps when you need to use CanActivete guard

//to use canDeactivate guard
//its necessary to make an interface that the component that'll
//use the guard needs to implement, to ensure it implements a canDeactivate method
//as part of its body, and this way the canDeactivateGuard can have a component to work with

import { Observable } from "rxjs/Rx";

export class UserGuard implements CanActivate{

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
		return confirm('for real?');
	}

}


export interface ComponentCanDeactivate{
	canDeactivate: () => boolean | Observable<boolean>;
}


export class UserEditGuardOut implements CanDeactivate<ComponentCanDeactivate>{

	canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{
		return component.canDeactivate ? component.canDeactivate() : confirm('you sure?');
	}

}
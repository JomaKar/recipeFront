import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'user-favorites',
	templateUrl: 'favorites.tmp.html',
	styleUrls: []
})

export class UserFavoriteRecipes{

	constructor(private route: Router, private aRoute: ActivatedRoute){}

	goBack(){
		let id = this.aRoute.parent.params.subscribe((param: any) => param.id);
		this.route.navigate(['profile', id]);
	}
}
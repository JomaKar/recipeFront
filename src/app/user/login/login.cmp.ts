import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'user-login',
	templateUrl: 'login.tmp.html',
	styleUrls: []
})

export class LoginUser{
	checkedUser: boolean = false;

	constructor(private route: Router){}

	goToUser(userId: number){
		this.route.navigate(['profile', userId], {queryParams: {'verified': this.checkedUser}});
	}

	goFake(txt: string){
		let userId: number = 3
		this.route.navigate(['profile', userId, 'edit', txt], {queryParams: {'verified': this.checkedUser}});
	}
}
import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-login',
	templateUrl:'./login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent {
	credentials: TokenPayload = {
		id: 0,
		name:'',
		email:'',
		password:''
	}

	constructor(private auth: AuthenticationService, private router:Router,  private spinner: NgxSpinnerService){}

	login(){
		this.spinner.show();
		this.auth.login(this.credentials).subscribe(
				() =>{
					this.spinner.hide();
					this.router.navigateByUrl('/profile')
				},
				err => {
					this.spinner.hide();
					//console.error(err);
					alert(err.error.error);
				}
			)
	}
}


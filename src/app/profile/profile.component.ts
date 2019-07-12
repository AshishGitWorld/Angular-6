import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service' 
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
	templateUrl:'./profile.component.html'
})

export class ProfileComponent {
	details:UserDetails

	constructor(private auth: AuthenticationService, private spinner: NgxSpinnerService ){}

	ngOnInit(){
		this.spinner.show();
		this.auth.profile().subscribe(
			user=>{
				this.spinner.hide();
				this.details = user
			},
			err=>{
				this.spinner.show();
				console.error(err)
			}
		)
	}
}


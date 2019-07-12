import { Component, OnInit } from '@angular/core';
import { AuthenticationService, PackageDetails } from '../../authentication.service' 
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-list-package',
  templateUrl: './list-package.component.html',
  styleUrls: ['./list-package.component.css']
})
export class ListPackageComponent implements OnInit {
 // public searchText : string; 
  details:PackageDetails
  constructor(private auth: AuthenticationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

  	this.spinner.show();
		this.auth.listPackage().subscribe(
			package_detail=>{
				
				this.details = package_detail
			},
			err=>{
				
				console.error(err)
			}
		)
		this.spinner.hide();

  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthenticationService, private spinner: NgxSpinnerService) { }

 ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
}

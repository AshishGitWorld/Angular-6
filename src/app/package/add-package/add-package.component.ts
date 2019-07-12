import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService, PackagePayload } from '../../authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  credentials: PackagePayload = {
    id: 0,
    package_title:'',
    package_description:'',
    duration:'',
    package_img:''
  }

 constructor(private auth: AuthenticationService, private router:Router){}
   selectedFile = File = null;
   onFileSelected(event){
     console.log(event);
       this.selectedFile = <File>event.target.files[0];

       if(this.selectedFile.length > 0){    
        let formData = new FormData();  
        formData.append('myfile', this.selectedFile); 
      }
   }

  createPackage(){   
    
    this.auth.createPackage(this.credentials).subscribe(
        () =>{
          this.router.navigateByUrl('/package/list')
        },
        err => {
          console.error(err)
        }
      )
  }

}

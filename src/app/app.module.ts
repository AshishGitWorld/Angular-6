import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddPackageComponent } from './package/add-package/add-package.component';
import { ListPackageComponent } from './package/list-package/list-package.component';

// import { DataTablesModule } from 'angular-datatables';
//import { PackageFilterPipe } from './package/list-package/package-filter.pipe';

const routes: Routes = [
	{path: '', component:HomeComponent},
	{path: 'login', component:LoginComponent },
	{path: 'register', component:RegisterComponent },
	{path: 'profile', component:ProfileComponent, canActivate: [AuthGuardService] },


  {path: 'package/create', component:AddPackageComponent, canActivate: [AuthGuardService] },
  {path: 'package/list', component:ListPackageComponent, canActivate: [AuthGuardService] }

]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddPackageComponent,
    ListPackageComponent,
   // PackageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxSpinnerModule,
    BrowserAnimationsModule,
 
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

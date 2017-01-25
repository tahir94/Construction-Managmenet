import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import  {LoginComponent } from "./login/login.component"
import  { DashboardComponent } from "./dashboard/dashboard.component"
export const appRoutes : Routes = [

 {
     path : 'dashboard',
     component : DashboardComponent
 },
  {
     path : 'login',
     component : DashboardComponent
 },
  {
    path : '',
    component :LoginComponent   
 }
] 

// export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutes } from "./app.routes"
import { AngularFireModule } from "angularfire2";
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
// import { AppRoutingComponent } from './app-routing/app-routing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 export const  firebaseConfig = {
    apiKey: "AIzaSyApQ__Wi3Gu4fm0tfI8N8hZLWv1S-h7oro",
    authDomain: "construction-management-ecdda.firebaseapp.com",
    databaseURL: "https://construction-management-ecdda.firebaseio.com",
    storageBucket: "construction-management-ecdda.appspot.com",
    messagingSenderId: "342065705048"
  };

@NgModule({
  declarations: [
    AppComponent,
    // AppRoutingComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectionComponent } from './homepage/connection/connection.component';
import { LoginComponent } from './login/login.component';
import {SearchModule} from "./homepage/search/search.module";
import {DisruptionModule} from "./homepage/disruption/disruption.module";
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import {HomepageModule} from "./homepage/homepage.module";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomepageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HomepageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

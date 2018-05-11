import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from './homepage/homepage.component';
import {HomepageModule} from "./homepage/homepage.module";
import {
  httpInterceptorProviders,
  basehttpInterceptorProviders
} from "./http-interceptors/index";
import {UserModule} from "./user/user.module";
import {AdminModule} from "./admin/admin.module";

const appRoutes: Routes = [
  {path: 'login', component: UserModule},
  {path: 'admin', component: AdminModule},
  { path: '', component: HomepageComponent},
  {path: '**', component: HomepageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AdminModule,
    BrowserModule,
    HomepageModule,
    HttpClientModule,
    UserModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

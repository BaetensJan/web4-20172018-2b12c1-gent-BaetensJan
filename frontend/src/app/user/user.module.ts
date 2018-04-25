import {AuthGuardService} from './auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './authentication.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

const routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule {
}

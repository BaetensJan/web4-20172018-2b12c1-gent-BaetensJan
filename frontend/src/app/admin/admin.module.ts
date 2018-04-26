import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from "./admin.component";
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AddStationComponent} from './add-station/add-station.component';

const routes = [
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [AdminComponent, AddStationComponent],
  exports: []
})
export class AdminModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminStationsComponent} from "../admin-stations/admin-stations.component";
import {AdminNavComponent} from "./admin-nav.component";
import {AdminRoutesComponent} from "../admin-routes/admin-routes.component";
import {RouterModule} from "@angular/router";
import {AdminDisruptionsComponent} from "../admin-disruptions/admin-disruptions.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AdminStationsComponent,AdminDisruptionsComponent, AdminNavComponent, AdminRoutesComponent],
  exports: [
    AdminStationsComponent,
    AdminNavComponent,
    AdminRoutesComponent,
    AdminDisruptionsComponent,
    RouterModule
  ]
})
export class AdminNavModule { }

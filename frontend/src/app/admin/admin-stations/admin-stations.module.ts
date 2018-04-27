import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminNavComponent} from "../admin-nav/admin-nav.component";
import {AdminStationsComponent} from "./admin-stations.component";
import {AdminNavModule} from "../admin-nav/admin-nav.module";

@NgModule({
  imports: [
    CommonModule,
    AdminNavModule
  ],
  declarations: []
})
export class AdminStationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminNavComponent} from "../admin-nav/admin-nav.component";
import {AdminStationsComponent} from "./admin-stations.component";
import {AdminNavModule} from "../admin-nav/admin-nav.module";
import { AddStationComponent } from './add-station/add-station.component';
import { StationListComponent } from './station-list/station-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []

})
export class AdminStationsModule { }

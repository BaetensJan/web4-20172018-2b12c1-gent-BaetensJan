import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminStationsComponent} from "../admin-stations/admin-stations.component";
import {AdminNavComponent} from "./admin-nav.component";
import {AdminRoutesComponent} from "../admin-routes/admin-routes.component";
import {RouterModule} from "@angular/router";
import {AdminDisruptionsComponent} from "../admin-disruptions/admin-disruptions.component";
import {StationListComponent} from "../admin-stations/station-list/station-list.component";
import {AddStationComponent} from "../admin-stations/add-station/add-station.component";
import {AddDisruptionComponent} from "../admin-disruptions/add-disruption/add-disruption.component";
import {DisruptionListComponent} from "../admin-disruptions/disruption-list/disruption-list.component";
import {RoutesListComponent} from "../admin-routes/routes-list/routes-list.component";
import {AddRouteComponent} from "../admin-routes/add-route/add-route.component";
import {StationDataService} from "../../station/station-data.service";
import {DisruptionDataService} from "../../disruption/disruption-data.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StationDataService, DisruptionDataService],
  declarations: [
    AdminStationsComponent,
    AdminDisruptionsComponent,
    AdminNavComponent,
    AdminRoutesComponent,
    AddStationComponent,
    StationListComponent,
    DisruptionListComponent,
    AddDisruptionComponent,
    RoutesListComponent,
    AddRouteComponent
  ],
  exports: [
    AdminStationsComponent,
    AdminNavComponent,
    AdminRoutesComponent,
    AdminDisruptionsComponent,
    RouterModule,
    AddStationComponent,
    StationListComponent,
    DisruptionListComponent,
    AddDisruptionComponent,
    RoutesListComponent,
    AddRouteComponent
  ]
})
export class AdminNavModule { }

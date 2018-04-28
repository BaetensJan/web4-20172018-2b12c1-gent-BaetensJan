import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AdminStationsComponent} from "./admin-stations/admin-stations.component";
import {AdminRoutesComponent} from "./admin-routes/admin-routes.component";
import {AdminDisruptionsComponent} from "./admin-disruptions/admin-disruptions.component";
import {AuthGuardService} from "../user/auth-guard.service";
import {AdminNavModule} from "./admin-nav/admin-nav.module";
import { DisruptionListComponent } from './admin-disruptions/disruption-list/disruption-list.component';
import { AddDisruptionComponent } from './admin-disruptions/add-disruption/add-disruption.component';
import { RoutesListComponent } from './admin-routes/routes-list/routes-list.component';
import { AddRouteComponent } from './admin-routes/add-route/add-route.component';


const routes = [
  {
    path: 'admin',
    redirectTo:'admin/stations',
    canActivate: [AuthGuardService]
  }, {
    path: 'admin/stations',
    component: AdminStationsComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'admin/disruptions',
    component: AdminDisruptionsComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'admin/routes',
    component: AdminRoutesComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminNavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  providers: []
})
export class AdminModule { }

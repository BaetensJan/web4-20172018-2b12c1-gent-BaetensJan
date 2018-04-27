import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AdminStationsComponent} from "./admin-stations/admin-stations.component";
import {AdminRoutesComponent} from "./admin-routes/admin-routes.component";
import {AdminStationsModule} from "./admin-stations/admin-stations.module";
import {AdminDisruptionsComponent} from "./admin-disruptions/admin-disruptions.component";
import {AdminDisruptionsModule} from "./admin-disruptions/admin-disruptions.module";
import {AdminRoutesModule} from "./admin-routes/admin-routes.module";
import {AuthGuardService} from "../user/auth-guard.service";


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
    AdminStationsModule,
    AdminDisruptionsModule,
    AdminRoutesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  providers: []
})
export class AdminModule { }
